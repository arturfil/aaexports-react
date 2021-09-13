import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getProductsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/products`);
  return response;
}

export const getSingleProductFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/products/product/${id}`);
  return response;
}

export const postProductToApi = async (product) => {
  const response = await axios.post(`${apiUrl}/products/product`, product);
  return response;
}

export const imageUploadToApi = async (id, img) => {
  const formData = new FormData();
  formData.append('image', img);
  const response = axios.post(`${apiUrl}/products/product/imageUpload/${id}`, formData);
  return response;
}

export const updateProductToApi = async (product) => {
  const response = await axios.put(`${apiUrl}/products/product/${product._id}`, product)
  return response;
}

export const deleteProductFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/products/product/${id}`);
  return response;
}