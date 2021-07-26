import { useState } from 'react';
import Alert from './components/Alert';
import CharacterList from './components/CharacterList';

function App() {
  const [inputString, setInputString] = useState('');
  const [characterCounts, setCharacterCounts] = useState({});
  const [characterOrder, setCharacterOrder] = useState([]);

  const handleTextInput = (event) => {
    setInputString(event.target.value);
  };

  const handleCharacterCount = () => {
    const newCharacterCounts = {};
    const newCharacterOrder = [];

    for (let char of inputString) {
      char = char.toUpperCase();
      // Increment a character count
      if (newCharacterCounts.hasOwnProperty(char)) {
        newCharacterCounts[char].count++;
      }
      // Add a new character to be counted
      else {
        // Ignore whitespace characters
        if (/\s/.test(char)) continue;

        // Adds the character to an array to track character order since JS objects do not maintain order of keys
        if (!newCharacterOrder.includes(char)) {
          newCharacterOrder.push(char);
        }

        newCharacterCounts[char] = { count: 1, isTopFive: false };
      }
    }

    // FIND TOP FIVE
    Object.entries(newCharacterCounts)
      .sort((char1, char2) => char1[1].count < char2[1].count)
      .slice(0, 5)
      .forEach((char) => {
        newCharacterCounts[char[0]].isTopFive = true;
      });

    setCharacterCounts(newCharacterCounts);
    setCharacterOrder(newCharacterOrder);
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen px-8 py-2 bg-white">
      <h1 className="text-3xl my-4">Character Counter</h1>
      <div className="flex flex-col justify-center items-center w-11/12">
        <textarea
          className="bg-gray-200 rounded w-full max-w-screen-md px-4 py-2"
          id="string-input"
          cols="30"
          rows="10"
          onChange={(event) => handleTextInput(event)}
        ></textarea>
        <button
          className="bg-blue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded my-4"
          onClick={() => handleCharacterCount()}
        >
          Count
        </button>
      </div>
      <CharacterList characterCounts={characterCounts} characterOrder={characterOrder} />
    </div>
  );
}

export default App;
