import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center home h-[100vh]">
        <h1 className="text-black font-semibold ">Loading...</h1>
        <p className="text-black font-semibold ">
          Built using ReactJs, TailwindCSS, Shimmer and NewsApi Integration
        </p>
        <h1 className=" text-black font-semibold">
          Give it a ⭐{" "}
          <a
            target="_blank"
            className="underline text-blue-500"
            href="https://github.com/priyanshu-ch29/NewsApp"
          >
            here
          </a>
        </h1>
      </div>
    </>
  );
};

export default Loading;
