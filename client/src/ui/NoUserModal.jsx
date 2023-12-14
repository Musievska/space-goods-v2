import { Link } from "react-router-dom";

export const NoUserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Authentication Required
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              You are not logged in. Please sign in to continue.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <Link
              to="/sign-in"
              className="block px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full text-center shadow-sm hover:bg-red-700"
            >
              Sign In
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-red-600 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white text-gray-700 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
