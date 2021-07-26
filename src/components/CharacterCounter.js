import React from 'react';
function CharacterCounter({ characterData }) {
  const { character, count, isTopFive } = characterData;

  return (
    <div
      className={`${
        isTopFive ? 'bg-light-orange' : 'bg-dark-orange'
      } flex flex-col justify-center items-center w-1/12 px-8 py-8 mx-4 my-2 text-center rounded shadow`}
    >
      <p className="text-xl font-bold ">{character}</p>
      <p>{count}</p>
    </div>
  );
}

export default CharacterCounter;
