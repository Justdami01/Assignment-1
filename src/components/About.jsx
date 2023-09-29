import React from "react";
import car from "../assets/car.avif";
import logo from "../assets/logo.png";

function About() {
  return (
    <div className="bg-white md:py-16 py-8">
      <div className="w-10/12 m-auto md:flex item-center justify-between">
        <div className=" md:pt-10 md:w-[50%] pb-4 md:pr-4 ">
          <img src={car} alt="" />
        </div>

        <div className="border-[1px] md:w-[50%] lg:py-8 border-sky-500 bg-[#f9f6f6] rounded-lg">
          <div className="w-[85%] m-auto py-8">
            <div>
              <h1 className="flex items-center pb-4 font-bold text-xl text-blue-500">
                Why
                carserra
                ?
              </h1>
            </div>
            <p className="lg:pb-4">
              We’ve a variety of market details for cars like suzuki, toyota,
              nissan, kia, tesla, ford and honda.
            </p>
            <p className="lg:pb-4">
              You may find updated market price, model and complete
              specifications of your dream car.
            </p>
            <p className="lg:pb-8 pb-4">So you may able to buy it.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4">
              Get Market Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
