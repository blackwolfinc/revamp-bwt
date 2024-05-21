import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import Pagination from './Pagination';
import gamesData from '../../assets/json/data.json'; // Adjust the path as per your folder structure

const shuffleArray = (array:any) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 8;

  useEffect(() => {
    const shuffledGames = shuffleArray(gamesData);
    setGames(shuffledGames);
    setLoading(false);
  }, []);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  return (
    <div className='flex h-full justify-center items-center flex-col px-4'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
            {currentGames.map((game:any) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          <Pagination
            gamesPerPage={gamesPerPage}
            totalGames={games.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default GameList;
