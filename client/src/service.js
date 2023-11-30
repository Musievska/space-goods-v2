import { PRODUCTS_URL } from "./constants";

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
