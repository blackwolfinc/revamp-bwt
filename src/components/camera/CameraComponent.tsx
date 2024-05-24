import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { FaCamera } from 'react-icons/fa';

const CameraComponent: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [filter, setFilter] = useState<string>('none');
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
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
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const takeSnapshot = () => {
    html2canvas(document.body).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'snapshot.png';
      link.click();
    }).catch(error => {
      console.error('Error taking snapshot:', error);
    });
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    if (videoRef.current) {
      videoRef.current.style.filter = event.target.value;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <button
          onClick={stream ? stopCamera : startCamera}
          className={`px-8 w-full py-2 font-bold text-white rounded ${
            stream ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
          }`}
        >
          {stream ? 'Stop Camera' : 'Start Camera'}
        </button>
      </div>
      <div className="w-full md:max-w-md border rounded overflow-hidden relative group">
        <video ref={videoRef} autoPlay playsInline className="w-full" style={{ filter: filter }} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={takeSnapshot} className="text-white text-3xl">
            <FaCamera />
          </button>
        </div>
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
