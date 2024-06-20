import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SingleArticleCard = ({ data }) => {
  console.log(data);

  const { author, description, title, publishedAt, url, urlToImage } = data;
  const { name } = data?.source;

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
      <div className=" w-[80%] bg-gray-100 mx-auto shadow-xl">
        <h1 className=" text-center text-3xl p-4">
          <span className=" font-bold">SOURCE: </span>
          {name}
        </h1>
        <h1 className=" text-center text-3xl m-4 p-4">
          <span className=" font-bold">AUTHOR: </span>
          {author}
        </h1>
        <h1 className=" text-center text-3xl m-4 p-4">
          <span className=" font-bold">TITLE: </span>
          {title}
        </h1>
        <div className=" flex justify-around items-center p-4">
          <img src={urlToImage} className=" w-[30%] h-[30vh]" />
          <div>
            <h1 className="m-4 p-4">
              <span className=" font-bold">PUBLISHED AT: </span>
              {publishedAt}
            </h1>
            <h1 className="m-4 p-4 font-normal">
              <span className=" font-bold">ABOUT: </span>
              {description}
            </h1>
          </div>
        </div>
        <Link to={url} target="_blank">
          <button className=" m-2 p-2 text-white bg-blue-400 font-semibold">
            Read More
          </button>
        </Link>
      </div>
    </>
  );
};

export default SingleArticleCard;
