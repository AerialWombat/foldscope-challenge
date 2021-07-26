import React from 'react';
function CharacterCounter({ characterData }) {
  const { character, count, isHighlighted } = characterData;

  return (
    <div
      className={`${
        isHighlighted ? 'bg-light-orange' : 'bg-dark-orange'
      } flex flex-col justify-center items-center w-1/12 px-8 py-4 mx-4 my-2 text-center rounded shadow-xl transform transition hover:scale-110`}
    >
      <p className="text-xl font-bold ">{character}</p>
      <p>{count}</p>
    </div>
  );
}

export default CharacterCounter;
