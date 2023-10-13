import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Lineb() {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;

    
    const lineLength = line.getTotalLength();

    gsap.set(line, {
      strokeDasharray: lineLength, 
      strokeDashoffset: lineLength, 
    });

    gsap.to(line, {
      strokeDashoffset: 0, 
      duration: 2, 
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" width="2" height="202" viewBox="0 0 2 202">
        <path
          ref={lineRef}
          d="M1 0L0.999991 202"
          stroke="#A1A1AA"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default Lineb;
