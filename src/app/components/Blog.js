import React from "react";
import NextButton from "./NextButton";

const Blog = ({ data }) => {
  return (
    <div className=" my-16 pl-4">
      <h2 className="text-xl text-black font-semibold mb-2">
        {data?.blogSubtitle}
      </h2>
      <div className="flex">
        {" "}
        <h1 className="text-3xl text-black font-semibold">{data?.blogTitle}</h1>
        <img
          className="ms-2"
          src="https://astral-paints-landing.vercel.app/Images/yellowline.svg"
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-10">
        <div className="flex flex-col lg:w-1/4 gap-4">
          <div className="flex-1 relative">
            <img
              src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FPainting%20Tools%20-%20Smaller%20Imgs.png&w=1920&q=75"
              alt="Outer Image 1"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-md text-white font-medium mb-3 italic">
                10 Jan 2024
              </p>
              <h3 className="text-xl text-white font-semibold">
                How to choose the perfect wallcolour for your office
              </h3>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FEnamel%20%26%20Distemper%20-Smaller%20Imgs%20.png&w=1920&q=75"
              alt="Outer Image 2"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-md text-white font-medium mb-3 italic">
                10 Jan 2024
              </p>
              <h3 className="text-xl text-white font-semibold">
                How to choose the perfect wallcolour for your office
              </h3>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <img
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FInterior%20Emulsions%20-%20Big%20img%20650%20x%20545.png&w=1920&q=75"
            alt="Full Width Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 p-4 w-full">
            <p className="text-md text-white font-medium mb-3 italic">
              20 Jan 2024
            </p>
            <h3 className="text-xl text-white font-semibold w-1/2">
              10 stylish cream colour combination for your home
            </h3>
            <NextButton
              btnClass={
                "inline-block rounded-full border-2 border-transparent bg-white px-6 pb-[6px] pt-2 text-xs font-semibold leading-normal text-[#258ccc] transition duration-150 ease-in-out"
              }
              btnName={"Read More"}
            />
          </div>
        </div>

        <div className="flex flex-col lg:w-1/4  gap-4">
          <div className="flex-1 relative">
            <img
              src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FEnamel%20%26%20Distemper%20-Smaller%20Imgs%20.png&w=1920&q=75"
              alt="Outer Image 3"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-md text-white font-medium mb-3 italic">
                10 Jan 2024
              </p>
              <h3 className="text-xl text-white font-semibold">
                How to choose the perfect wallcolour for your office
              </h3>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FPainting%20Tools%20-%20Smaller%20Imgs.png&w=1920&q=75"
              alt="Outer Image 4"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-4 w-full">
              <p className="text-md text-white font-medium mb-3 italic">
                10 Jan 2024
              </p>
              <h3 className="text-xl text-white font-semibold">
                How to choose the perfect wallcolour for your office
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
