import React from "react";
import bg_image from "../assets/background_img.jpg";
import { Link } from "react-router-dom";
import MySkil from "./MySkil";
const FrontContent = () => {
  return (
    <>
      <div className="z-0 w-full">
        <img
          src={bg_image}
          alt="bg_img"
          className="w-full h-[95vh] object-cover brightness-[0.6]"
        />
        <div className="absolute top-[40%] left-14 max-md:left-12">
          <h1 className="font-medium text-3xl text-white max-md:text-xl">
            I'M{" "}
            <span className="text-6xl max-md:text-3xl text-yellow-500">
              Tarun Kumbhakar
            </span>
          </h1>
          <h1 className="font-medium text-3xl text-white max-md:text-xl my-3">
            Software Developer
          </h1>
          <button className="bg-gray-600 border border-yellow-100 bg-opacity-70 px-5 py-[10px] bg-gradient-to-tr from-gray-500 text-white text-lg rounded-md hover:bg-gray-700 max-md:px-3 max-md:py-1 max-md:my-3">
            About Me
          </button>
        </div>
      </div>
      <div className="bg-[#3d3d3d] text-white p-5">
        <h1 className="text-2xl my-2 font-serif text-left">About</h1>
        <div className="flex ml-5 pb-5 text-left">
          <p className="w-[70px] h-[2px] mt-[15px] bg-yellow-500"></p>
          <p className="text-lg ml-1">
            I'm a software developer having 4 years experience with multiple
            technology. I always passinate punctual to my work.
          </p>
        </div>
        <Link to="/about"><button className="bg-yellow-600 border border-yellow-100 bg-opacity-70 px-5 py-[5px] bg-gradient-to-tr from-yellow-600 text-white text-md rounded-md hover:bg-gray-700 max-md:px-3 max-md:py-1 max-md:my-3 text-end">
          Know More
        </button></Link>
      </div>
      <div className="bg-[#3d3d3d] text-white py-4">
        <h1 className="text-2xl font-serif pl-4 pt-3">My Skills</h1>
        <MySkil/>
      </div>
    </>
  );
};

export default FrontContent;
