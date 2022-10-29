import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ data }) => {
  return (
    <div className=" h-auto md:h-screen lg:h-screen flex items-center w-full md:mr-4">
      <aside className="bg-base-300 w-full md:w-auto text-base-200">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm p-6 font-semibold tracking-widest uppercase text-gray-400">
              Details
            </h2>
            <div className="flex flex-col space-y-1">
              <ul className="menu">
                {data.map((course, i) => (
                  <li key={course.name} className="hover-bordered">
                    <Link key={course.guid} to={`/course/${course._id}`}>
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
