import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Shimmer() {
  // there is always a delay to api data to show for this we add shimmer for making user experience more better
  return (
    <>
      <div className="grid grid-cols-3 gap-10 m-12 w-[85%] justify-center justify-items-center mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <Skeleton count={1} width={350} height={350} />
        <Skeleton count={1} width={350} height={350} />
        <Skeleton count={1} width={350} height={350} />
        <Skeleton count={1} width={350} height={350} />
        <Skeleton count={1} width={350} height={350} />
        <Skeleton count={1} width={350} height={350} />
      </div>
    </>
  );
}

export default Shimmer;
