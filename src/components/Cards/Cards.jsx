import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ course }) => {
  return (
    <div>
      <div className="card w-full h-full glass">
        <figure>
          <img
            src={course.picture}
            loading="lazy"
            className="w-full"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <p>{course.about.slice(0, 50)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/course/${course._id}`}>
              <button className="btn btn-primary">Learn now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
