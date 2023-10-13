import React from "react";
import Ovalbar from "./Ovalbar";
import CountUp from "react-countup";
import Blink from "./Blink";
import Linea from "./Linea";
import Lineb from "./Lineb";
import Linec from "./Linec";
import Lined from "./Lined";

const Dashboard = () => {
  return (
    <div className="dashboard-bg w-full h-screen">
      <div className=" bg-black h-screen opacity-80 mx-auto flex flex-col gap-[42px] ">
        <div className="border-v1">
          <div className="w-full max-w-[1440px]  mx-auto flex justify-between">
            <div className=" border-r border-[#27272A] pr-[32px] flex justify-center items-center ">
              <img
                className="cursor-pointer "
                src="./images/logo-1.png"
                alt="dashboard-logo"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-white text-xl font-normal dasgboard-font  leading-tight text-center">
                WEBSHOP MANAGER
              </p>
            </div>

            <div className="flex">
              <div className="flex items-center border-l border-r border-[#27272A] ">
                <img
                  className="cursor-pointer"
                  src="./images/stop.png"
                  alt=""
                  width={100}
                  height={95}
                />
              </div>
              <div>
                <img
                  className="cursor-pointer"
                  src="./images/pause.png"
                  width={88}
                  height={88}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="w-full max-w-[1280px] border-v2 mx-auto pt-[24px] pr-[24px] pl-[24px] flex justify-between items-center">
            <div className="w-full max-w-[272px] flex flex-col gap-4">
              <p className="text-zinc-400 text-lg font-normal data-font leading-[18px]">
                Current dataset
              </p>
              <p className="text-white text-xl font-normal leading-tight">
                Primary Brands
              </p>
            </div>
            <div className="w-full max-w-[272px] flex flex-col gap-3 ">
              <p className="text-zinc-400 text-lg font-normal leading-[18px]">
                Total Rows
              </p>
              <div className="flex items-center justify-between">
                <p className="text-white text-3xl font-normal font-Digital leading-[45px]">
                <CountUp start={0} end={376} duration={10} />
                </p>
                <img src="./images/lines.png" alt="" />
              </div>
            </div>
            <div className="w-full max-w-[272px] flex flex-col gap-3 ">
              <p className="text-zinc-400 text-lg font-normal leading-[18px]">
                Total Columns
              </p>
              <div className="flex items-center justify-between">
                <p className="text-white text-3xl font-normal font-Digital leading-[45px]">
                <CountUp start={0} end={16} duration={10} />
                </p>
                <img src="./images/v-lines.png" alt="" />
              </div>
            </div>
            {/* <div className="flex flex-col items-center relative">
              <img src="./images/progressbar.png" alt="" />
              <div className="absolute z-1 top-12 flex flex-col items-center gap-[10px]">
                <p className="text-lime-400 text-3xl font-normal font-Digital leading-[30px]">
                <CountUp start={0} end={64} duration={10} />%
                </p>
                <p className="text-zinc-200 text-lg font-normal leading-[18px]">
                  Progress
                </p>
              </div>
            </div> */}
            <Ovalbar/>
          </div>
          <div className="">
            <div className="flex relative z-0 right-[333px] ">
              {/* <img src="./images/multi-lines.png" alt="" /> */}
              <Blink/>
              <div className="absolute top-0 right-[40px] z-[-1] ">
              <Linea/>

              </div>
              <div className="absolute right-[40px] z-[-1]">
                <Lineb/>
              </div>
              <div className="absolute left-[458px] z-[-1]">
                <Linec/>
              </div>
              <div className="absolute left-[458px] z-[-1]">
                <Lined/>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 w-full max-w-[1280px]   gap-8">
            <div className="box-bg flex flex-col gap-6 pl-4 pr-[35.67px] py-[49px] roll-in-left ">
              <p className="text-white text-[40px] font-normal font-Digital leading-10">
              <CountUp start={0} end={342} duration={10} />
              </p>
              <p className="text-zinc-400 text-base font-normal leading-snug">
                Titles Missing
              </p>
            </div>
            <div className="box-bg-b flex flex-col gap-6  pl-4 pr-[37.67px] py-[38px]  ">
              <p className="text-white text-[40px] font-normal font-Digital  leading-10">
                <CountUp start={0} end={622} duration={10} />
              </p>
              <p className="text-zinc-400 text-base font-normal leading-snug">
                Descriptions Missing
              </p>
            </div>
            <div className="box-bg-b flex flex-col gap-6  pl-4 pr-[30.67px] py-[49px] ">
              <p className="text-white text-[40px] font-normal font-Digital  leading-10">
                <CountUp start={0} end={842} duration={10} />
              </p>
              <p className="text-zinc-400 text-base font-normal leading-snug">
                Images Missing
              </p>
            </div>
            <div className="box-bg-b flex flex-col gap-6  pl-4 pr-[30.67px] py-[38px]   ">
              <p className="text-white text-[40px] font-normal font-Digital  leading-10">
                <CountUp start={0} end={392} duration={10} />
                
              </p>
              <p className="text-zinc-400 text-base font-normal leading-snug">
                Fitment Data Missing
              </p>
            </div>
            <div className="box-bg-b flex flex-col gap-6 pl-4 pr-[30.67px] py-[38px]  ">
              <p className="text-white text-[40px] font-normal font-Digital  leading-10">
                <CountUp start={0} end={202} duration={10} />
                
              </p>
              <p className="text-zinc-400 text-base font-normal leading-snug">
                Incorrect Categorisation
              </p>
            </div>
            <div className="box-bg-b flex flex-col gap-6  pl-4 pr-[30.67px] py-[38px] ">
              <p className="text-white text-[40px] font-normal font-Digital  leading-10">
                <CountUp start={0} end={942} duration={10} />
                
              </p>
              <p className="text-zinc-400 text-base font-normal leading-snug">
                Part Type Missing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
