import React from 'react';
import PinCode from './PinCode';

const Passcode = (props) => {
  const handlePinEntered = () => {
   
    handleSubmitPasscode();
  };

  const handleSubmitPasscode = () => {
    props.onPasscodeSubmit(); 
  };

  return (
    <div className="w-full h-screen bg-color-passcode max-[1440px]  ">
      <div className="flex flex-col mx-auto justify-center items-center pt-[80px] gap-[177px]">
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col items-center gap-[68px]  ">
          <p className="text-white text-6xl font-normal leading-[60px]">
            What’s the passcode?
          </p>
          <PinCode onPinEntered={handlePinEntered} />
        </div>
      </div>
    </div>
  );
};

export default Passcode;
