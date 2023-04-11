import { createContext, useState, useEffect, useContext } from "react";
import { Auth } from "aws-amplify";

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
      console.log("Registered successfully", user);
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const user = await Auth.signIn(email, password);
      console.log("Successfully signed in", user);
      setLoggedIn(true);
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
      console.log("Signed out successfully");
    } catch (error) {
      console.log("error signing out: ", error);
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
