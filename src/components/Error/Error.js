import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-900 text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>
              {error.status || "404"}
            </h2>
            <p className="text-2xl font-semibold mb-10 md:text-3xl">
              {error.statusText || "Not Found"}
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded bg-primary text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
