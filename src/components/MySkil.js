import React from "react";
import { skills } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MySkil = () => {
  return (
    <div className="grid grid-rows-3 max-md:grid-rows-6 max-lg:grid-rows-4 grid-flow-col px-14 gap-4 py-5">
      {skills.map((skill) => (
        <div className="bg-gray-600 text-white shadow-xl w-full items-center text-center p-6 hover:bg-yellow-500 hover:text-black hover:scale-90 translate-x-0 duration-[1000ms]">
          <FontAwesomeIcon
            icon={skill.icon}
            className="w-[70px] h-[50px] mb-3"
          />
          <h1 className="text-xl">{skill.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default MySkil;
