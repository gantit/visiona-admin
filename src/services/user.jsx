import axios from "../config/axios";

const login = async (data) => {
  const url = `/api/user/login`;
  let response;
  try {
    response = await axios.post(url, data);
    const {token,username, role, email} = response.data;
    return {token,username, role, email}
  } catch (error) {
    console.log("Error")
    return null
  };
};

export {login};
