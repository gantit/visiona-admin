import axios from '../config/axios';

const login = async (data) => {
  const url = '/api/user/login';
  let response;
  try {
    response = await axios.post(url, data);
    console.log(response);
    const {
      email,
      role,
      token,
      username,
    } = response.data;
    window.sessionStorage.setItem('jwt', token);
    return {
      token, username, role, email,
    };
  } catch (error) {
    console.log('Error');
    return null;
  }
};

const logout = async (data) => {
  const url = '/api/user/logout';
  let response;
  try {
    response = await axios.post(url, data);
    const {
      token, username, role, email,
    } = response.data;
    return {
      token, username, role, email,
    };
  } catch (error) {
    console.log('Error');
    return null;
  }
};

export { login, logout };
