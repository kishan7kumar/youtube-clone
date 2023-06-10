import React from "react";
import Logo from "../../assets/logo.svg";
import { MdMenu, MdSearch } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <div className="w-full h-14 border border-gray-400 flex items-center justify-between px-4">
      <div className="flex items-center">
        <div>
          <button className="hover:bg-gray-200 rounded-full p-2">
            <MdMenu className="text-2xl text-gray-600"></MdMenu>
          </button>
        </div>
        <div>
          <img
            src={Logo}
            className="w-[120px] h-[50px]"
            alt="company logo"
          ></img>
        </div>
      </div>
      <div className="w-[520px] flex">
        <input
          placeholder="Search"
          className="border border-gray-300 w-full rounded-full rounded-tr-none rounded-br-none p-1 px-3"
        ></input>
        <button className="bg-gray-100 border border-gray-300 rounded-tr-full px-4 rounded-br-full hover:bg-gray-200">
          <MdSearch className="text-xl text-gray-600"></MdSearch>
        </button>
      </div>
      <div>
        <button className="hover:bg-gray-200 rounded-full p-2">
          <HiOutlineUserCircle className="text-3xl text-gray-500"></HiOutlineUserCircle>
        </button>
      </div>
    </div>
  );
};

export default Header;
