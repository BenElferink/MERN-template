import { createContext, useContext, useState, useEffect } from 'react';
import axios, { backendUrl } from '../api';

// init context
const AuthContext = createContext();

// export the consumer
export function useAuth() {
  return useContext(AuthContext);
}

// export the provider (handle all the logic here)
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/auth/account');
        setIsLoggedIn(true);

        // Did you know? You can use CSS in the console!
        console.log(
          `%cExample of using your backend routes %c(${backendUrl}/auth/account)`,
          'color: lime;',
          'color: unset;',
          response,
        );
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>;
}
