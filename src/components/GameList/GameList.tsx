import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import gamesData from '../../assets/json/data.json'; // Adjust the path as per your folder structure

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};
const GameList = () => {
  const [games, setGames] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Shuffle the array before setting it
    const shuffledGames = shuffleArray(gamesData);
    setGames(shuffledGames);
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
