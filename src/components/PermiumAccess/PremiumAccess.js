import React from "react";
import { useLoaderData } from "react-router-dom";
import "./PremiumAccess.css";

const PremiumAccess = () => {
  const course = useLoaderData();
  const { picture, name, price, review, tags } = course;

  return (
    <div className="container mx-auto grid place-content-center lg:h-[70vh] rounded-md bg-base-300 my-6">
      <div className=" md:flex-col largeflex  w-full p-6">
        <img
          src={picture}
          className="md:w-full lg:w-1/2 rounded-md"
          alt={name}
        />
        <div className="md:w-full lg:w-1/2 px-3">
          <h1 className="text-3xl md:text-4xl mt-4 mb-3 md:mt-6 lg:mt-0 font-bold">
            {name}
          </h1>
          {tags.map((tag, idx) => (
            <div
              key={tag.toUpperCase + idx}
              className="badge badge-accent font-semibold m-3 mt-0 ml-0"
            >
              {tag.toUpperCase()}
            </div>
          ))}
          {
            <div className="badge badge-secondary m-3 ml-0 mt-0 font-semibold">
              ⭐{review.toFixed(2)}
            </div>
          }
          <div className="overflow-x-auto">
            <table className="table w-full font-roboto">
              <thead className="text-base-100 bg-base-300">
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price</td>
                  <td>${price}</td>
                </tr>

                <tr className="active">
                  <td>Vat & Tax</td>
                  <td>${(price * 0.1).toFixed(2)}</td>
                </tr>

                <tr>
                  <td>Total</td>
                  <td>${(price + price * 0.1).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button className="btn btn-lg mb-6 btn-primary mx-6">Checkout</button>
    </div>
  );
};

export default PremiumAccess;
