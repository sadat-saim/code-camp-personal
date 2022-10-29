import React from "react";
import { Link } from "react-router-dom";
import src from "./pngwing.com.png";

const Hero = () => {
  return (
    <div>
      <section className="bg-base-800 min-h-screen text-gray-400 ">
        <div className="container flex flex-col-reverse md:flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none sm:text-6xl">
              World's
              <span className="text-primary 00 ml-1">Best </span> Programming
              Courses
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              We'll take you step-by-step through engaging video tutorials
              <br className="hidden md:inline lg:hidden" />
              teach you everything you need to know to succeed as a Web
              application developer.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/courses"
                className="px-8 py-3 text-lg font-semibold rounded  text-gray-900 bg-primary "
              >
                View Courses
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/blogs"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-1 00"
              >
                Blogs
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={src}
              alt=""
              className="object-contain block h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
