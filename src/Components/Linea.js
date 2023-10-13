import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Linea() {
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
      <svg xmlns="http://www.w3.org/2000/svg" width="225" height="202" viewBox="0 0 225 202">
        <path
          ref={pathRef}
          d="M224 0V54C224 89.8985 194.899 119 159 119H61C27.8629 119 1 145.863 1 179V202"
          stroke="#A1A1AA"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Linea;
