import { createContext, useState, useEffect, useContext } from "react";
import { Auth } from "aws-amplify";

import { ApiResult } from "../models";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkAuthStatus = () => {
    Auth.currentAuthenticatedUser()
      .then((sess) => {
        console.log("logged in", sess);
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("not logged in");
        setLoggedIn(false);
      });
  };

  const signUp = async (email, password) => {
    try {
      const { user } = await Auth.signUp(email, password);
      return new ApiResult(ApiResult.SUCCESS, user);
    } catch (error) {
      return new ApiResult(ApiResult.FAILED, null, error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const user = await Auth.signIn(email, password);
      setLoggedIn(true);
      return new ApiResult(ApiResult.SUCCESS, user);
    } catch (error) {
      return new ApiResult(ApiResult.FAILED, null, error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
      return new ApiResult(ApiResult.SUCCESS, null);
    } catch (error) {
      return new ApiResult(ApiResult.FAILED, null, error);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
