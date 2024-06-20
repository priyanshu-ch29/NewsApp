import React, { useState } from "react";
import logo from "../assets/logo.png";
import { buttonList } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = ({ setCategory }) => {
  return (
    <>
      <div className=" h-[13vh] bg-black flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-[6rem] pt-4 pl-4" />
        </Link>
        <h1 className=" text-white text-2xl font-semibold mr-44 max-md:mr-22 max-sm:mr-6">
          Welcome to NewsApp🚀
        </h1>
      </div>
      <h1 className=" text-center text-3xl m-4 p-4 font-semibold">
        Latest <span className=" text-lime-500">News</span>
      </h1>
      <div className=" flex justify-center items-center max-md:flex max-md:flex-col max-md:gap-2">
        {buttonList.map((btn, index) => {
          const { id, buttonName, buttonCategory } = btn;
          return (
            <button
              onClick={() => setCategory(buttonCategory)}
              className=" rounded border font-semibold text-white p-2 mr-5 bg-black shadow-xl max-md:w-[14rem]"
              key={index}
            >
              {buttonName}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Header;
