import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthContext from "../context/authContext";
import { SignInForm } from '../forms/components/SignInForm';

export const SignIn = () => {
  const { handleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await handleSignIn(values.email, values.password);
      toast.success("Sign in successful");
      navigate("/"); 
    } catch (error) {
      toast.error("Sign in failed: " + error.message);
    }
  };

  return (
    <div>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

