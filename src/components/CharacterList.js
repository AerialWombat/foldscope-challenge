import React from 'react';
import CharacterCounter from './CharacterCounter';

function CharacterList({ characterCounts, characterOrder }) {
  return (
    <div className="flex flex-col justify-center items-center max-w-full">
      <div className="flex flex-row flex-wrap justify-center">
        {characterOrder.map((character, index) => {
          return (
            <CharacterCounter
              key={index}
              characterData={{ character, ...characterCounts[character] }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
