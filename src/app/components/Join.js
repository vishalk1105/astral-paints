import React from "react";
import NextButton from "./NextButton";

const Join = ({ data }) => {
  const getParagraphs = (description) => {
    return description
      ? description
          .replace(/<br\s*\/?>/gi, "\n")
          .split(/<\/?p>/g)
          .filter((para) => para.trim() !== "")
      : [];
  };

  const paragraphs = getParagraphs(data?.homeJoinDescription);
  return (
    <div>
      {data && (
        <div className="relative">
          <img
            className="w-full"
            src={data?.homeJoinBackgroundImage?.node?.sourceUrl}
            alt=""
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h4 className="text-lg text-white">{data?.homeJoinSubtitle}</h4>
            <h1 className="text-3xl text-white">{data?.homeJoinTitle}</h1>
            {data &&
              paragraphs?.map((para, index) => (
                <div key={index} className="mb-4 text-md text-white">
                  {para}
                </div>
              ))}
            <NextButton
              btnName={data?.homeJoinButton?.title}
              btnClass={
                "inline-block rounded-full bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-black shadow-light-3 transition duration-150 ease-in-out"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Join;
