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
      <div className='text-lime-400 text-3xl font-normal  leading-[30px] number flex flex-col items-center gap-2'>
      <p className='font-Digital'>{Math.round(progress)}%</p>
      <div><p className='text-zinc-200 text-lg font-normal leading-[18px] font-[IBM Plex Mono]'>Progress</p></div>

      </div>
    </div>
  );
}

export default Ovalbar;
