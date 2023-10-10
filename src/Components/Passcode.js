import React from "react";
import PinCode from "./PinCode";

const Passcode = () => {
  return (
    <div className="w-full h-[900px] bg-color-passcode ">
      <div className="flex flex-col mx-auto justify-center items-center">
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col items-center gap-[68px] ">
          <p className="text-white text-6xl font-normal leading-[60px]">
            What’s the passcode?
          </p>
          <PinCode/>
        </div>
      </div>
    </div>
  );
};

export default Passcode;
