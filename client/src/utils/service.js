import debounce from "lodash.debounce";
import axios from "axios";

import {
  PRODUCTS_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
  CHECK_USER_URL,
  SIGN_OUT_URL,
  CHECK_EMAIL_URL,
  CLOUDINARY_CLOUD_URL,
  CLOUD_PRESET,
  API_KEY,
  CLOUDINARY_GET_URL,
} from "./constants";

export const getProducts = async (
  page = 1,
  category = "",
  sort = "",
  search = ""
) => {
  try {
    let queryString = `?page=${encodeURIComponent(page)}`;
    if (category) {
      queryString += `&category=${encodeURIComponent(category)}`;
    }
    if (sort) {
      queryString += `&sort=${encodeURIComponent(sort)}`;
    }
    if (search) {
      queryString += `&search=${encodeURIComponent(search)}`;
    }

    const response = await fetch(`${PRODUCTS_URL}${queryString}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${PRODUCTS_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const signUp = async (email, password) => {
  try {
    const response = await fetch(SIGN_UP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await fetch(SIGN_IN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const checkUser = async () => {
  try {
    const response = await fetch(CHECK_USER_URL, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Check User Error:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const response = await fetch(SIGN_OUT_URL, {
      method: "POST",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const message = await response.text(); // Get the response as text, because there was
    return message; // Return the text message
  } catch (error) {
    console.error("Sign Out Error:", error);
    throw error;
  }
};

export const checkEmail = async (email) => {
  try {
    const response = await fetch(CHECK_EMAIL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error("Error checking email:", error);
    throw error;
  }
};

export const debouncedCheckEmail = debounce(async (email) => {
  try {
    const response = await checkEmail(email);
    if (response.message === "Email already registered") {
      return Promise.reject(new Error("Email already registered"));
    }
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}, 500);

export const uploadImage = async (file, onUploadProgress) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUD_PRESET);
    formData.append("api_key", API_KEY);

    // Debugging logs
    // console.log("CLOUDINARY_CLOUD_URL:", CLOUDINARY_CLOUD_URL);
    // console.log(
    //   "FormData:",
    //   formData.get("file"),
    //   formData.get("upload_preset")
    // );
    // console.log(API_KEY);

    const response = await axios.post(CLOUDINARY_CLOUD_URL, formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onUploadProgress(percentCompleted);
      },
    });

    return response.data; // Contains the URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// export const getUploadedImages = async () => {
//   try {
//     const response = await axios.get(CLOUDINARY_GET_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error;
//   }
// };

export const getUploadedImages = async (nextCursor) => {
  try {
    const params = {};
    if (nextCursor) {
      params.next_cursor = nextCursor;
    }

    const response = await axios.get(CLOUDINARY_GET_URL, { params });
    return response.data; // This should include both the images and the next_cursor
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
