import React from "react";
import NextButton from "./NextButton";

const Category = ({ data }) => {
  const { categories } = data || [];
  return (
    <div className=" my-16 pl-4">
      <h2 className="text-xl text-black font-semibold mb-2">
        {data?.homeCategorySubtitle}
      </h2>
      <h1 className="text-3xl text-black font-semibold">
        {data?.homeCategoryTitle}
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 relative pt-4  bg-white ">
          <img
            className="w-full h-full object-cover"
            src={categories?.[0]?.image?.node?.sourceUrl}
            alt=""
          />
          <div className="absolute bottom-0 z-10 bg-[#ff9119] w-full flex justify-between p-4 py-6">
            <h3 className="text-2xl text-white "> {categories?.[0]?.title}</h3>
            <NextButton
              btnName={"Read More"}
              btnClass={
                "inline-block rounded-full border-2 bg-white border-[#ff9119] px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-[#ff9119] transition duration-150 ease-in-out "
              }
            />
          </div>
        </div>
        <div className="flex-1 w-full lg:w-1/2 px-4 grid grid-cols-2 gap-4 pt-4">
          {categories?.slice(1, 5).map((category, index) => (
            <div key={index} className="relative">
              <img
                src={category?.image?.node?.sourceUrl}
                alt={category?.title || "Image"}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 z-10 w-full flex justify-between p-2">
                <h3 className="text-xl text-white">{category?.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
