import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import gamesData from '../../assets/json/data.json'; // Adjust the path as per your folder structure

const GameList = () => {
  const [games, setGames]:any = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setGames(gamesData);
    setLoading(false);
  }, []);

  return (
    <div className='flex h-full justify-center items-center '>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <GameCard game={games} />
      )}
    </div>
  );
};

export default GameList;