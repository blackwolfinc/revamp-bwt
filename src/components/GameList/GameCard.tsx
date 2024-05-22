import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GameCard = ({ game }:any) => {
  const [selectedGameUrl, setSelectedGameUrl] = useState(null);

  const handleCardClick = (url:any) => {
    setSelectedGameUrl(url);
  };

  return (
    <div className="relative w-[300px] rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 transform hover:scale-105" onClick={() => handleCardClick(game.url)}>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black to-transparent opacity-70 rounded-lg"></div>
      <motion.div className="relative w-full h-48 sm:h-56">
        <Image unoptimized src={game.thumb} alt={game.title} layout="fill" objectFit="cover" priority className="rounded-xl" quality={10} />
      </motion.div>
      <div className="p-4 absolute inset-0 flex flex-col justify-center items-center text-white z-20">
        <h5 className="font-bold text-lg mb-2">{game.title}</h5>
        <p className="text-sm mb-2">{game.category}</p>
        <button className="bg-black px-8 py-2 border-2 rounded-3xl">Play Now</button>
      </div>
      {selectedGameUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <iframe src={selectedGameUrl} title="Selected Game" className="w-4/5 h-4/5"></iframe>
          <button className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-300" onClick={() => setSelectedGameUrl(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default GameCard;
