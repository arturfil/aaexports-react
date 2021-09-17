import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL


export const loginUserToApi = async (user) => {
  const response = await axios.post(`https://iron-cors-anywhere.herokuapp.com/${apiUrl}/auth/login`, user, {withCredentials: true});
  try {
    console.log(response.data);
    if (response.data.user) {
      localStorage.setItem('jwtaaexports', JSON.stringify(response.data))
    }
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
  }
  return false;
}

export const logOut = async () => {
  await localStorage.removeItem('jwtaaexports');
}