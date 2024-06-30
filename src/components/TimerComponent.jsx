import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return (
    <div>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default TimerComponent;
