import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getProductsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/products`);
  return response;
}

export const postProductToApi = async (product) => {
  const response = await axios.post(`${apiUrl}/products/product`, product);
  return response;
}