import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/authContext";
import { SignUpForm } from "../forms/components/SignUpForm";

export const SignUp = () => {
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await handleSignUp(values.email, values.password);
      toast.success("Sign up successful");
      navigate("/");
    } catch (error) {
      // Check if the error response exists and has a status code
      if (error.response?.status) {
        switch (error.response.status) {
          case 409:
            toast.error("This email is already registered");
            break;
          default:
            toast.error("Sign up failed");
        }
      } else {
        // Handle any error that doesn't have a response status
        toast.error("This email is already registered");
      }
    }
  };

  return (
    <div>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};
