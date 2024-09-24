"use client";
import React, { useState } from "react";
import { colorsList } from "../constants/data";

const Colors = ({ data }) => {
  const [hoveredColorId, setHoveredColorId] = useState(null);

  return (
    <div className="flex">
      <div className="p-4 bg-white ">
        <h2 className="text-xl text-black font-semibold mb-2">
          {data?.homeColoursSubtitle}
        </h2>
        <h1 className="text-3xl text-black font-semibold">
          {data?.homeColoursTitle}
        </h1>

        <div className="py-4">
          <div className="sm:flex sm:justify-center gap-4 flex-wrap">
            {colorsList.map((color) => {
              return (
                <div
                  onMouseEnter={() => setHoveredColorId(color.id)}
                  onMouseLeave={() => setHoveredColorId(null)}
                  className={`text-center ${
                    hoveredColorId === color.id
                      ? "shadow-5-strong rounded-lg"
                      : ""
                  } `}
                  key={color.id}
                >
                  <h3
                    className="py-2 text-black font-semibold"
                    style={{
                      visibility:
                        hoveredColorId === color.id ? "visible" : "hidden",
                    }}
                  >
                    {color.name}
                  </h3>

                  <div
                    className={`w-48 h-36 flex items-center justify-center mb-3`}
                    style={{ backgroundColor: color.code }}
                  >
                    <div
                      className={`w-44 h-32 bg-[${color.code}]  border-2 border-white`}
                      style={{ backgroundColor: color.code }}
                    ></div>
                  </div>

                  <h2 className="text-black font-semibold">{color.name}</h2>
                  <h3>{color.code}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
