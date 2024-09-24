import React from "react";
import NextButton from "./NextButton";

const Services = ({ data }) => {
  const { homeAboutVideoImage } = data || {};
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="p-4 bg-white ">
        <h2 className="text-xl text-black font-semibold mb-2">
          {data?.homeServicesSubtitle}
        </h2>
        <h1 className="text-3xl text-black font-semibold">
          {data?.homeServicesTitle}
        </h1>

        <div className="py-4">
          <div className="sm:flex sm:justify-center gap-8">
            <div className="relative bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none">
              <img
                className=""
                src={homeAboutVideoImage?.node?.sourceUrl}
                alt="Hollywood Sign on The Hill"
              />
              <div className="absolute bottom-0 p-4 bg-[#ffc107] w-full">
                <h3 className="text-2xl text-black font-semibold">
                  Wall Painting
                </h3>
                <p className="text-xl text-black font-medium mb-3">
                  Lorem Ipsum jgajgvua hacjhjah achj.
                </p>
                <NextButton
                  btnName={"Read More"}
                  btnClass={
                    "inline-block rounded-full border-2 border-transparent bg-white px-6 pb-[6px] pt-2 text-xs font-semibold leading-normal text-black transition duration-150 ease-in-out"
                  }
                />
              </div>
            </div>

            <div className="relative bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none">
              <img
                className=""
                src={homeAboutVideoImage?.node?.sourceUrl}
                alt="Hollywood Sign on The Hill"
              />
              <div className="absolute bottom-0 p-4 bg-[#ffc107] w-full">
                <h3 className="text-2xl text-black font-semibold">
                  Water Solution
                </h3>
                <p className="text-xl text-black font-medium mb-3">
                  Lorem Ipsum jgajgvua hacjhjah achj.
                </p>
                <NextButton
                  btnName={"Read More"}
                  btnClass={
                    "inline-block rounded-full border-2 border-transparent bg-white px-6 pb-[6px] pt-2 text-xs font-semibold leading-normal text-black transition duration-150 ease-in-out"
                  }
                />
              </div>
            </div>

            <div className="relative bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none">
              <img
                className=""
                src={homeAboutVideoImage?.node?.sourceUrl}
                alt="Hollywood Sign on The Hill"
              />
              <div className="absolute bottom-0 p-4 bg-[#ffc107] w-full">
                <h3 className="text-2xl text-black font-semibold">Painting</h3>
                <p className="text-xl text-black font-medium mb-3">
                  Lorem Ipsum jgajgvua hacjhjah achj.
                </p>
                <NextButton
                  btnName={"Read More"}
                  btnClass={
                    "inline-block rounded-full border-2 border-transparent bg-white px-6 pb-[6px] pt-2 text-xs font-semibold leading-normal text-black transition duration-150 ease-in-out"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
