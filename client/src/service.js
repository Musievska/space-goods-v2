import { PRODUCTS_URL } from "./constants";

// export const getProducts = async () => {
//   try {
//     const response = await fetch(PRODUCTS_URL);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("There was a problem fetching the products:", error);
//     throw error;
//   }
// };

export const getProducts = async (page = 1, perPage = 6) => {
  try {
    const response = await fetch(`${PRODUCTS_URL}?page=${page}&perPage=${perPage}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Full API Response:', data); // Log the full response
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${PRODUCTS_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
