import React from "react";
import NextButton from "./NextButton";

const About = ({ data }) => {
  const { homeAboutDescription, homeAboutVideoImage } = data || {};

  const paragraphs = homeAboutDescription
    ? homeAboutDescription.split(/<\/?p>/g)
    : [];
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 p-4 bg-white pt-32">
        <h2 className="text-xl text-black font-semibold mb-2">
          {data?.homeAboutSubtitle}
        </h2>
        <div className="flex">
          <h1 className="text-3xl text-black font-semibold">
            {data?.homeAboutTitle}
          </h1>{" "}
          <img
            className="ms-2"
            src="https://astral-paints-landing.vercel.app/Images/redline.svg"
            alt=""
          />
        </div>

        {data &&
          paragraphs?.map((para, index) => (
            <div key={index} className="mb-4">
              {para}
            </div>
          ))}
        <NextButton
          btnClass={
            "inline-block rounded-full border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 "
          }
          btnName={data?.homeAboutButton?.title}
        />
      </div>
      <div className="flex-1 p-4 pt-0">
        <img
          className="w-full h-full object-cover"
          src={homeAboutVideoImage?.node?.sourceUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
