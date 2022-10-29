import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { signup, updateUserProfile, signout, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.fullName.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signup(email, password)
      .then((result) => {
        toast.success("Registered successfully");
        setLoading(false);
        updateUserProfile({
          displayName: username,
          photoURL: photo,
        })
          .then(() => {
            signout().then(() => setLoading(true));
            navigate("/signin");
          })
          .catch((err) => {
            toast.error(`${err.message}`);
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        console.log(err.message);
      });
  };

  return (
    <div className="grid place-content-center my-6">
      <div className="flex flex-col max-w-md p-6 py-6 rounded-md sm:p-10 bg-base-300 text-base-200">
        <div className="mb-8 text-center">
          <h1 className=" text-3xl font-bold">Register an account</h1>
          <p className="text-sm text-gray-400">
            Sign up to create a new account
          </p>
        </div>
        <form
          className="space-y-2 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Jhon Doe"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-base-300 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                required
                placeholder="url of your photo"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-base-300 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-base-300 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-base-300 text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-0">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-primary my-3 text-gray-900"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?
              <Link
                rel="noopener noreferrer"
                to="/signin"
                className="hover:underline text-primary ml-1 "
              >
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
