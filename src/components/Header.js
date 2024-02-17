import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleManu =()=>{
        setMenuOpen(!menuOpen)
    }
  return (
    <>
      <div className="w-full h-[70px] fixed bg-[#3d3d3d] flex z-50">
        <div>
          <img
            className="h-16 w-16 max-md:h-14 max-md:w-14"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENF9uv9UWIWWbExsgj7XyX58xMFAOZTzUSQ&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className="block absolute top-4 left-[40%] max-md:hidden">
          <ul className="flex justify-center items-center text-white font-normal">
            <li className="p-1 mx-1">Home</li>
            <li className="p-1 mx-1">About</li>
            <li className="p-1 mx-1">Project</li>
            <li className="p-1 mx-1">Contact</li>
          </ul>
        </div>
        <div className="absolute right-5 top-3 max-md:top-[10px] max-md:right-[75px]">
          <img
            className="h-11 w-11 rounded-full"
            src="https://yt3.ggpht.com/ylt_oyttut3dH4DzjORG7B5G7Qc8fpAf3aDZAdtSfv_SAh_3NGcRd30YVQZd9nWHg3vOrQbFLA=s88-c-k-c0x00ffffff-no-rj"
            alt="logo"
          />
        </div>
        <div className="hidden absolute top-[10px] max-md:block max-md:right-5 border border-gray-600 p-2" onClick={toggleManu}>
            <FontAwesomeIcon icon={menuOpen? "fa-solid fa-xmark" : "fa-solid fa-bars"} className="text-white h-6"/>
        </div>

        {/* mobile menu */}
        {menuOpen && <div className="hidden absolute w-full bg-[#3d3d3d] top-14 py-2 m-auto max-md:block z-50">
          <ul className="text-white font-normal text-xl py-5 mx-5">
            <li className="p-2 mx-1 my-3 hover:bg-yellow-50 hover:text-black">Home</li>
            <li className="p-2 mx-1 my-3 hover:bg-yellow-50 hover:text-black">About</li>
            <li className="p-2 mx-1 my-3 hover:bg-yellow-50 hover:text-black">Project</li>
            <li className="p-2 mx-1 my-3 hover:bg-yellow-50 hover:text-black">Contact</li>
          </ul>
        </div>}
      </div>
    </>
  );
};

export default Header;
