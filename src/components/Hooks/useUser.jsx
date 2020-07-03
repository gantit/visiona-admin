import { useContext, useCallback, useState } from 'react';
import Context from '../../context/UserContex';
import * as userService from '../../services/user';


const useUser = () => {
  const {
    jwt, setJWT,
    setUser, user,
  } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });


  const login = useCallback(async (data) => {
    setState({ loading: true, error: false });
    try {
      const userLogged = await userService.login(data);
      if (userLogged) {
        const {
          email, role,
          token, username,
        } = userLogged;
        setUser({ email, role, username });
        setJWT(token);
        setState({ loading: false, error: false });
        window.sessionStorage.setItem('jwt', token);
      }
    } catch (error) {
      console.log({ error });
      setState({ loading: false, error: true });
    }
  }, [setJWT, setUser]);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt');
    setJWT(null);
  }, [setJWT]);

  return {
    hasLoginError: state.error,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    login,
    logout,
    user,
  };
};


export default useUser;
