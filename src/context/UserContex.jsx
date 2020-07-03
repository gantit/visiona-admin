import React, { useState } from 'react';

const Context = React.createContext({});

const UserContexProvider = ({ children }) => {
  const [jwt, setJWT] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{
      jwt,
      setJWT,
      user,
      setUser,
    }}
    >
      {children}
    </Context.Provider>
  );
};
export { UserContexProvider };
export default Context;
