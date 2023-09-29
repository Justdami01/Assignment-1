import React from "react";
import Lambo from "../assets/feature/lambo.jpeg";
import Tesla from "../assets/feature/tesla.png";
import Rolls from "../assets/feature/rolls.jpg";
import Audi from "../assets/feature/audi.png";
import BMW from "../assets/feature/bmw.jpg";
import Ford from "../assets/feature/ford.png";
import Benz from "../assets/feature/benz.png";
import Porsche from "../assets/feature/porsche.png";

function Features() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="w-10/12 m-auto">
        <div className="pb-8">
          <h1 className="font-bold text-xl text-blue-600 text-center">
            Featured Market:
          </h1>
        </div>
        <div className="border-[1px] border-blue-700 bg-gray-200 rounded-lg py-16">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 justify-center">
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={Lambo} alt="lambo" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={Tesla} alt="tesla" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={Rolls} alt="rolls" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={Audi} alt="audi" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={BMW} alt="bmw" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={Ford} alt="ford" className="w-full h-full" />
            </div>
            <div className="border w-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={Benz} alt="benz" className="w-full h-full" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white flex items-center justify-center m-auto rounded">
              <img src={Porsche} alt="porsche" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;