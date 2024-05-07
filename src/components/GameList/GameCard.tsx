import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GameCard = ({ game }:any) => {
  const [selectedGameUrl, setSelectedGameUrl] = useState(null);

  const handleCardClick = (url:any) => {
    setSelectedGameUrl(url);
  };

  return (
    <div className="container h-mx-auto z-50 !mt-[-17vh] ">
      <h1 className="text-3xl font-bold mb-4 px-[1rem] text-[20px]">Browser Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  overflow-y-auto max-h-[50vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-[1rem]">
        {game.map((game:any) => (
          <motion.div
            key={game.id}
            className="rounded-lg overflow-hidden shadow-md  cursor-pointer opacity-80 hover:opacity-100 hover:shadow-lg relative "
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick(game.url)}
          >
            <div
              className="absolute inset-0 z-10 bg-gradient-to-b from-black to-transparent  opacity-70 rounded-lg"
            ></div>
            <motion.div
              className="relative w-full h-48 sm:h-56 grayscale-[1] scale-75 "
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={game.thumb}
                alt={game.title}
                layout="fill"
                objectFit="cover"
                priority
                className="rounded-xl"
                quality={10}
              />
            </motion.div>
            <div className="p-4 absolute inset-0 flex flex-col justify-center items-center text-white z-20">
              <h5 className="font-bold text-lg mb-2">{game.title}</h5>
              <p className="text-sm mb-2">{game.category}</p>
              <button className="block   bg-[#000000] px-[2rem] py-[1rem] border-2 rounded-3xl text-white">Play Now</button>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedGameUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <iframe
            src={selectedGameUrl}
            title="Selected Game"
            className="w-4/5 h-4/5"
          ></iframe>
          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-300"
            onClick={() => setSelectedGameUrl(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default GameCard;
