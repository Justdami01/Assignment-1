import React from "react";
import { BsSearchHeart } from "react-icons/bs";

function Homepage() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="w-10/12 bg-gray-200 m-auto md:py-9 py-9 border-[1px] border-blue-600 rounded-lg">
        <div className="w-[85%] m-auto">
          <p className="text-blue-500 font-bold text-lg md:text-2xl pb-8">
            Finding a dream car is not that easy, but we made it easy for you in
            just one click you <br/> may able to get market details.
          </p>
          <span className="flex items-center justify-center font-bold text-blue-600 text-5xl font-serif">carserra</span>
          <form className="py-7">
            <div className="flex border border-blue-500 rounded-lg">
              <input
                type="search"
                className="w-full p-2 text-sm bg-gray-50 outline-none rounded-l-lg"
                placeholder="Find your dream car here....."
              />
              <button className="bg-blue-500 rounded-r-lg px-4 py-2 text-white hover:bg-blue-700 transition duration-400">
                <BsSearchHeart size={25} className="" />
              </button>
            </div>
          </form>
          <div className="border p-4 rounded-lg bg-gray-100">
            <h1 className="pb-2 font-bold">Recent Searches:</h1>
            <ul className="md:flex md:gap-4">
              {/**Make them clickable */}
              <li>Tesla</li>
              <li>Elentra</li>
              <li>Lamborghini </li>
              <li>BMW</li>
              <li>Ferrari</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;