import { PRODUCTS_URL } from "./constants";

export const getProducts = async () => {
  try {
    const response = await fetch(PRODUCTS_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem fetching the products:", error);
    throw error;
  }
};
