import React from "react";

const NextButton = ({ btnName, btnClass }) => {
  return (
    <button type="button" className={` ${btnClass}`}>
      {btnName}
    </button>
  );
};

export default NextButton;
