import React from "react";

export default function ShoeCard({ imgUrl, ChangeBigShoe, bigShoeImage }) {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) 
    ChangeBigShoe(imgUrl.bigShoe);
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe ? "border-coral-red border " : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 ">
        <img
          className="object-contain"
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
}
