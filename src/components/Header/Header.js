import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./favicon-32x32.png";

const Header = ({ handleThemeChange }) => {
  const { user, signout, setLoading } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  let displayName, photoURL;

  //Hamburger menu open close class state
  const Open = `md:menu md:menu-horizontal uppercase p-0 md:flex-row md:h-auto md:w-auto md:bg-transparent md:static md:translate-y-0 flex flex-col items-center sm:text-center absolute bg-base-100 h-96 w-full shadow-sm md:shadow-none transition-transform top-0 left-0 -translate-y-0 justify-center z-10`;
  const Closed = `md:menu md:menu-horizontal uppercase p-0 md:flex-row md:h-auto md:w-auto md:bg-transparent md:static md:translate-y-0 flex flex-col items-center sm:text-center absolute bg-base-100 h-96 w-full transition-transform top-0 left-0 -translate-y-96 justify-center z-10`;

  if (user !== null) {
    displayName = user.displayName;
    photoURL = user.photoURL;
  }

  const handleSignOut = () => {
    signout()
      .then(() => {
        toast.success("Signed out successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };

  const handleMenu = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-base-100 font-roboto">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case font-secularone text-2xl"
          >
            <img src={logo} className="mr-2" alt="logo" /> CodeCamp
          </Link>
        </div>
        <label
          className="swap swap-rotate mr-2 scale-75 md:mr-0"
          onClick={handleThemeChange}
        >
          <input type="checkbox" className="opacity-0" />
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div className="flex-none">
          <ul className={open ? Open : Closed}>
            <li
              onClick={() => setOpen(false)}
              className=" hover:scale-110 md:hover:scale-100 transition-all"
            >
              <Link to="/courses">Courses</Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className=" hover:scale-110 md:hover:scale-100 transition-all my-2 md:my-0"
            >
              <Link to="/faq" className="mx-2">
                FAQ
              </Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className=" hover:scale-110 md:hover:scale-100 transition-all my-2 md:my-0"
            >
              <Link to="/blogs" className="mr-2">
                Blogs
              </Link>
            </li>
            {!user && (
              <li
                onClick={() => setOpen(false)}
                className=" hover:scale-110 md:hover:scale-100 transition-all"
              >
                <Link to="/signin" className="btn btn-primary text-white mx-2">
                  Log in
                </Link>
              </li>
            )}
            {user && (
              <div
                className="dropdown dropdown-end tooltip tooltip-left"
                data-tip={displayName}
              >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={photoURL} alt={displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li onClick={() => setOpen(false)}>
                    <span className="text-primary">{user.displayName}</span>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li onClick={handleSignOut}>
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </ul>
          <Bars3BottomRightIcon
            className="h-6 w-6 cursor-pointer md:hidden relative z-50"
            onClick={handleMenu}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
