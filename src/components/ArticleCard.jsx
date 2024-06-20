import React from "react";

const ArticleCard = ({ data }) => {
  const { description, title, urlToImage } = data;

  return (
    <>
      <div className="w-[24rem] shadow-lg h-full bg-gray-200 hover:cursor-pointer hover:scale-105">
        <div className=" h-[14vh] max-md:h-[16vh]">
          <h1 className=" m-4 ">
            <span className=" font-bold">TITLE: </span>
            {title}
          </h1>
        </div>
        <img src={urlToImage} alt="" className=" w-full p-4 h-[27vh]" />
        <h1 className=" m-4">
          <span className=" font-bold">SUMMARY: </span>
          {description}
        </h1>
      </div>
    </>
  );
};

export default ArticleCard;
