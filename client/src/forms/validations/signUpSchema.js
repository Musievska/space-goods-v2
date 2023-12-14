import * as Yup from "yup";

// import { debouncedCheckEmail } from "../../utils/service";

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    // .test(
    //   'checkEmail', 
    //   'Checking email...', // This message shows while the email is being checked
    //   async (email, { createError }) => {
    //     try {
    //       await debouncedCheckEmail(email);
    //       return true;
    //     } catch (error) {
    //       return createError({ message: error.message });
    //     }
    //   }
    // ),
    
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
