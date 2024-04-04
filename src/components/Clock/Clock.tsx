import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time :any) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div className=' w-[20rem] bg-[#8787874f] lg:bg-[#ffffff74] text-[#ffffffa8] lg:text-black text-center flex justify-end lg:justify-start px-[2em] rounded-md items-center'>
      {formatTime(time)}
    </div>
  );
};

export default Clock;