import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Blink() {
  const pathRef = useRef(null);
  const newCircleRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(newCircleRef.current, {
          opacity: 1,
        });
      },
    });
  }, []);

  useEffect(() => {
    const newCircle = newCircleRef.current;

    gsap.set(newCircle, { opacity: 0 });

    gsap.to(newCircle, {
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <div className="App">
      <svg width="500" height="200" viewBox="0 0 424 202">
        <path
          ref={pathRef}
          d="M423 0V55C423 90.3462 394.346 119 359 119H81C36.8172 119 1 154.817 1 199V202"
          fill="none"
          stroke="url(#paint0_linear_25_626)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_25_626"
            x1="423.605"
            y1="2.05758e-05"
            x2="45.2692"
            y2="265.163"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#003915" />
            <stop offset="1" stopColor="#0FA647" />
          </linearGradient>
        </defs>
      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="-15 14 40 40" ref={newCircleRef}>
        <g filter="url(#filter0_diii_25_627)">
          <path d="M19.994 14C23.3044 14 25.9881 16.6836 25.9881 19.994C25.9881 23.3044 23.3044 25.9881 19.994 25.9881C16.6836 25.9881 14 23.3044 14 19.994C14 16.6836 16.6836 14 19.994 14Z" fill="black" ref={newCircleRef} />
          <path d="M19.994 15.3965C22.5332 15.3965 24.5915 17.4549 24.5915 19.994C24.5915 22.5331 22.5332 24.5915 19.994 24.5915C17.4549 24.5915 15.3965 22.5331 15.3965 19.994C15.3965 17.4549 17.4549 15.3965 19.994 15.3965Z" stroke="white" stroke-width="2.79309" />
        </g>
        <defs>
          <filter id="filter0_diii_25_627" x="0.0345364" y="0.0345287" width="39.919" height="39.919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="6.98273" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.395098 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_627" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_627" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="6.98273" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_25_627" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="9.31031" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect2_innerShadow_25_627" result="effect3_innerShadow_25_627" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="2.32758" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect3_innerShadow_25_627" result="effect4_innerShadow_25_627" />
          </filter>
        </defs>
      </svg> 
       */}
      <svg
      className="shad-2 rounded-full ml-[35px] " 
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={newCircleRef}
      >
        <g filter="url(#filter0_iii_25_627)">
          <path
            d="M5.99403 -7.62939e-06C9.30445 -7.62939e-06 11.9881 2.68361 11.9881 5.99403C11.9881 9.30444 9.30445 11.9881 5.99403 11.9881C2.68362 11.9881 0 9.30444 0 5.99403C0 2.68361 2.68362 -7.62939e-06 5.99403 -7.62939e-06Z"
            fill="black"
          />
          <path
            d="M5.99403 1.39654C8.53315 1.39654 10.5915 3.4549 10.5915 5.99402C10.5915 8.53315 8.53315 10.5915 5.99403 10.5915C3.45491 10.5915 1.39655 8.53315 1.39655 5.99402C1.39655 3.4549 3.45491 1.39654 5.99403 1.39654Z"
            stroke="white"
            stroke-width="2.79309"
          />
        </g>
        <defs>
          <filter
            id="filter0_iii_25_627"
            x="0"
            y="-7.62939e-06"
            width="11.9881"
            height="11.9881"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6.98273" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_25_627"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="9.31031" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_25_627"
              result="effect2_innerShadow_25_627"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2.32758" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.337255 0 0 0 0 0.827451 0 0 0 0 0.392157 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_25_627"
              result="effect3_innerShadow_25_627"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Blink;
