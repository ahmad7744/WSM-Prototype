import React, { useEffect, useState } from 'react';

const BlinkingRectangles = () => {
  const [currentRectIndex, setCurrentRectIndex] = useState(0);

  const rectangles = [
    { x: -0.00012207, y: 121.484 },
    { x: -0.00012207, y: 116.968 },
    { x: -0.00012207, y: 112.452 },
    { x: -0.00012207, y: 112.452 },
    { x: -0.00012207, y: 112.452 },
    { x: -0.00012207, y: 112.452 },
    { x: -0.00012207, y: 112.452 },
    { x: -0.00012207, y: 112.452 },
    { x: -0.00012207, y: 112.452 },
    { x: -0.00012207, y: 112.452 },
    // Add more rectangle coordinates as needed
  ];

  const colors = ['#A3E635', 'transparent'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRectIndex((prevIndex) => (prevIndex + 1) % rectangles.length);
    }, 1000); // Adjust the interval duration to control the blinking speed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="121" viewBox="0 0 29 121">
      {rectangles.map((rect, index) => (
        <rect
          key={index}
          x={rect.x}
          y={rect.y}
          width="3.6129"
          height="28.9032"
          fill={index === currentRectIndex ? colors[0] : colors[1]}
        />
      ))}
    </svg>
  );
};

export default BlinkingRectangles;
