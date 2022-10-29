import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Sidebar from "../Sidebar/Sidebar";

const Courses = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div className="max-h-screen flex items-center  static md:sticky lg:sticky top-4 lg:top-0 md:top-0 ">
          <Sidebar data={data}></Sidebar>
        </div>
        <div className=" col-span-3 px-3 ">
          <h1 className="font-secularone text-center text-3xl md:text-4xl lg:text-6xl my-10 border-b-4 inline-block border-slate-400">
            Courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {data.map((course) => (
              <Cards key={course._id} course={course}></Cards>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
