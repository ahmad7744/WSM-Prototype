import React from "react";

const Uploadfile = ({ onFileUploadComplete }) => {
  const handleFileUploadComplete = () => {
    onFileUploadComplete(); 
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      
      setTimeout(() => {
        handleFileUploadComplete(); 
      }, 2000); 
    }
  };

  return (
    <div className="w-full h-screen bg-color-passcode max-[1440px]  ">
      <div className="flex flex-col mx-auto justify-center items-center pt-[80px] gap-[81px]">
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col items-center gap-[81px] w-full   ">
          <p className="text-white text-6xl font-normal leading-[60px] ">
            LOAD File
          </p>
          <div className="cvs-style w-fit max-w-[1062px] ">
            <div className=" flex flex-col gap-6">
              <div className="flex flex-col justify-center items-center gap-[18px]">
                <img src="./images/upload-line.png" alt="upload icon" />
                <p className="text-white text-xl font-medium  leading-normal">
                  Drag & drop files or{" "}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-7 ">
                <div className="upload-btn-wrapper">
                  <button
                    className="btn text-white text-base font-medium  leading-snug"
                  >
                    Browse
                  </button>
                  <input
                    type="file"
                    name="myfile"
                    onChange={handleFileUpload}
                  />
                </div>
                <p className=" text-slate-400 text-base font-normal  leading-none ">
                CSV file size should not exceed (x)mb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadfile;
