import React, { useState, useRef } from 'react';

const CameraComponent = () => {
  const [stream, setStream]:any = useState(null);
  const [filter, setFilter] = useState('none');
  const videoRef:any = useRef();

  const startCamera = async () => {
    try {
      const mediaStream:any = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track: { stop: () => any; }) => track.stop());
      setStream(null);
    }
  };

  const handleFilterChange = (event:any) => {
    setFilter(event.target.value);
    if (videoRef.current) {
      videoRef.current.style.filter = event.target.value;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <button onClick={startCamera} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Start Camera
        </button>
        <button onClick={stopCamera} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Stop Camera
        </button>
      </div>
      <div className="w-full md:max-w-md border rounded overflow-hidden relative">
        <video ref={videoRef} autoPlay playsInline className="w-full" style={{ filter: filter }} />
        <div className="absolute top-0 right-0 m-4">
          <select value={filter} onChange={handleFilterChange} className="bg-white border rounded px-2 py-1">
            <option value="none">None</option>
            <option value="grayscale(100%)">Grayscale</option>
            <option value="sepia(100%)">Sepia</option>
            <option value="invert(100%)">Invert</option>
            <option value="hue-rotate(90deg)">Hue Rotate</option>
            <option value="saturate(200%)">Saturate</option>
            <option value="contrast(200%)">Contrast</option>
            <option value="brightness(150%)">Brightness</option>
            <option value="blur(5px)">Blur</option>
            {/* Add more filter options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CameraComponent;
