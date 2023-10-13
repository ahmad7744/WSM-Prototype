import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Lined() {
  const pathRef = useRef(null);

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
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" width="673" height="202" viewBox="0 0 673 202">
        <path
          ref={pathRef}
          d="M0.999996 0V59C0.999996 92.1371 27.8629 119 61 119H592C636.183 119 672 154.817 672 199V202"
          stroke="#A1A1AA"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Lined;
