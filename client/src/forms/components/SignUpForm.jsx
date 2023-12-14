import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { signUpSchema } from "../validations/signUpSchema";

export const SignUpForm = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={signUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign Up</h1>
            <p className="mt-2 text-gray-500">Create a new account</p>
          </div>
          <div className="mt-5">
            <Field
              type="email"
              name="email"
              placeholder={t("Email Address")}
              className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-red-500 focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />

            <Field
              type="password"
              name="password"
              placeholder={t("Password")}
              className="peer mt-4 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-red-500 focus:outline-none"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />

            <Field
              type="password"
              name="confirmPassword"
              placeholder={t("Confirm Password")}
              className="peer mt-4 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-red-500 focus:outline-none"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm mt-1"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-red-500 px-3 py-4 text-white hover:bg-red-700 focus:outline-none mt-6"
            >
              {t("Sign Up")}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              {t("Already have an account?")}{" "}
              <Link
                to="/sign-in"
                className="font-medium text-red-600 hover:underline"
              >
               { t("Sign In")}
              </Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};
