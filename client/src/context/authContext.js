import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { checkUser, signIn, signUp, signOut } from "../utils/service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      // Extract JWT token from cookies
      const jwtCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];

      // Only call checkUser if JWT token is present
      if (jwtCookie) {
        try {
          const verifiedUser = await checkUser();
          setUser(verifiedUser);
        } catch (error) {
          console.error("Verification Error:", error);
        }
      }
    };
    verifyUser();
  }, []);

  const handleSignUp = async (email, password) => {
    try {
      const data = await signUp(email, password);
      setUser(data);
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      const data = await signIn(email, password);
      setUser(data);
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error during sign out:", error);
      toast.error("Sign out failed: " + error.message);
    }
  };

  const value = { user, handleSignUp, handleSignIn, handleSignOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
