"use client";

import React, { useEffect, useState } from "react";
import NextButton from "./NextButton";

const NextCarousel = ({ data }) => {
  const { banners } = data || [];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        <div
          className="absolute z-20 right-5 top-1/2 transform rotate-90"
          data-twe-carousel-indicators
        >
          {data &&
            banners?.map((_, index) => (
              <button
                key={index}
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to={index}
                className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                  activeIndex === index ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleSlideChange(index)}
                aria-current={activeIndex === index ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {data &&
            banners?.map((banner, i) => {
              return (
                <div
                  key={i}
                  className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                    i === activeIndex ? "block" : "hidden"
                  }`}
                  data-twe-carousel-item
                  data-twe-carousel-active={
                    i === activeIndex ? "true" : "false"
                  }
                >
                  <img
                    src={banner?.bannerImage?.node?.sourceUrl}
                    className="block w-full"
                    alt={banner?.bannersTitle}
                  />

                  <div className="absolute top-1/4 left-20 z-5">
                    <h1 className="text-white text-[50px] w-56 font-bold leading-none mb-4">
                      {banner?.bannersTitle}
                    </h1>
                    <p className="text-white mb-5">
                      {banner?.bannerDescription}
                    </p>
                    <NextButton
                      btnName={banner?.bannerButton?.title}
                      btnClass={
                        "inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-neutral-50 transition duration-150 ease-in-out "
                      }
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <img
            className="w-full absolute bottom-[-67px] z-20"
            src="https://astral-paints-landing.vercel.app/Images/rainbow-new.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NextCarousel;
