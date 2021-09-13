import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL

export const getCategoriesFromApi =  async () => {
  const response = await axios.get(`${apiUrl}/categories`);
  return response;
}

export const postCategoryToApi = async (category) => {
  const response = await axios.post(`${apiUrl}/categories/category`, category);
  return response;
}

export const deleteCategoryFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/categories/category/${id}`);
  return response;
}