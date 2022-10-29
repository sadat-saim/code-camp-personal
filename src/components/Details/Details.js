import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import jsPDF from "jspdf";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

const Details = () => {
  const course = useLoaderData();

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "mm", "a4");
    pdf.setFontSize(30);
    pdf.text(course.name, 20, 20);
    pdf.setFontSize(24);
    pdf.text("Course Details", 20, 35);
    pdf.setFontSize(16);
    const lines = pdf.splitTextToSize(course.about, 170);
    pdf.text(20, 50, lines);
    pdf.save(`${course.name}.pdf`);
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="font-secularone flex justify-center text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
          <span className="border-b-4 border-slate-500">{course.name}</span>
          <span
            data-tip="Download pdf"
            className="tooltip tooltip-bottom font-roboto"
            onClick={createPDF}
          >
            <DocumentArrowDownIcon
              data-tip="hello"
              className="w-6 h-6 text-primary inline self-center ml-3 cursor-pointer"
            />
          </span>
        </h1>
        <img
          src={course.picture}
          className=" md:w-3/4 lg:w-2/3 block text-center mx-auto mt-10 md:mt-15 lg:mt-20"
          alt={course.name}
        />
        <div className="flex justify-center mt-5">
          {course.tags.map((tag, idx) => (
            <div
              key={tag + idx}
              className="badge badge-primary mr-2 text-center"
            >
              {tag}
            </div>
          ))}
          <div className="badge badge-accent font-semibold">
            ⭐ {course.review.toFixed(2)}
          </div>
        </div>
        <h3 className="text-2xl font-secularone text-center mt-7 uppercase">
          Tech Stack
        </h3>
        <div className="flex justify-center m-3 mt-5">
          {course.tags.map((tag) => (
            <div
              key={tag}
              className="p-6 flex flex-col w-32 h-32 bg-base-300 justify-center m-3 items-center text-center"
            >
              <span className="font-secularone text-7xl">
                {tag.slice(0, 1).toUpperCase()}
              </span>
              <span className="font-bold">{tag.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 w-11/12 md:w-4/5 lg:w-6/12 mx-auto">
          {course.about}
        </p>
      </div>
      <Link to={`/checkout/${course._id}`}>
        <button className="btn btn-wide btn-primary block my-6 mx-auto">
          Get Premium Access
        </button>
      </Link>
    </div>
  );
};

export default Details;
