import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Blink() {
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
      <svg xmlns="http://www.w3.org/2000/svg" width="461" height="202" viewBox="0 0 461 202">
        <path
          ref={pathRef}
          d="M1.00001 0V59C1.00001 92.1371 27.8629 119 61 119H380C424.183 119 460 154.817 460 199V202"
          stroke="#A1A1AA"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Blink;
