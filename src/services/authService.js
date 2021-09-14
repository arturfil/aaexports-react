import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL

export const loginUserToApi = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/login`, user);
  try {
    console.log(response.data);
    localStorage.setItem('jwtaaexports', JSON.stringify(response.data))
  } catch (error) {
    console.log(error)
  }
  return response;
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwtaaexports')) {
    return JSON.parse(localStorage.getItem('jwtaaexports'));
    // return localStorage.getItem('jwt')
  }
    return false;
}