import React, { useEffect, useState } from 'react';


function Ovalbar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
   
    const fetchProgress = () => {
      
        
      return 64;
    };

    const animateProgress = (targetProgress) => {
      let currentProgress = 0;
      const duration = 3000; 
      const startTimestamp = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsedTime = now - startTimestamp;
        currentProgress = (elapsedTime / duration) * targetProgress;

        if (currentProgress < targetProgress) {
          requestAnimationFrame(animate);
        } else {
          currentProgress = targetProgress;
        }

        setProgress(currentProgress);
      };

      requestAnimationFrame(animate);
    };

    const targetProgress = fetchProgress();
    animateProgress(targetProgress);
  }, []);

  return (
    <div className="progress">
      <div className="barOverflow">
        <div
          className="bar"
          style={{ transform: `rotate(${45 + progress * 1.8}deg)` }}
        ></div>
      </div>
    
      <span>{progress}%</span>
    </div>
  );
}

export default Ovalbar;