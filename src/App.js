import { useState } from 'react';
import CharacterList from './components/CharacterList';

function App() {
  const [inputString, setInputString] = useState('');
  const [characterCounts, setCharacterCounts] = useState({});
  const [characterOrder, setCharacterOrder] = useState([]);
  const [highlightTies, setHighlightTies] = useState(false);

  const handleTextInput = (event) => {
    setInputString(event.target.value);
  };

  const handleCharacterCount = () => {
    const newCharacterCounts = {};
    const newCharacterOrder = [];

    for (let char of inputString) {
      // Handle potential uppercase/lowercase differences
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

        newCharacterCounts[char] = { count: 1, isHighlighted: false };
      }
    }

    // Sort characters by their count and marks the top five to be highlighted
    Object.entries(newCharacterCounts)
      .sort((char1, char2) => char1[1].count < char2[1].count)
      .slice(0, 5)
      .forEach((char) => {
        newCharacterCounts[char[0]].isHighlighted = true;
      });

    // If user wants ties to be highlighted, iterates through the previously marked top 5 and marks any characters with identical counts to be highlighted
    if (highlightTies) {
      Object.keys(newCharacterCounts).forEach((key1) => {
        if (newCharacterCounts[key1].isHighlighted) {
          Object.keys(newCharacterCounts).forEach((key2) => {
            if (newCharacterCounts[key1].count === newCharacterCounts[key2].count) {
              newCharacterCounts[key2].isHighlighted = true;
            }
          });
        }
      });
    }

    setCharacterCounts(newCharacterCounts);
    setCharacterOrder(newCharacterOrder);
  };

  const toggleHightlightTies = (event) => {
    setHighlightTies(!highlightTies);
    setInputString('');
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen px-8 py-2 bg-white">
      <h1 className="text-3xl my-2">Character Counter</h1>

      <label className="inline-flex items-center mb-2 cursor-pointer">
        <input
          type="checkbox"
          className="h-5 w-5 cursor-pointer"
          checked={highlightTies}
          onChange={(event) => toggleHightlightTies(event)}
        />
        <span className="ml-2 text-sm text-yellow-600 font-bold">
          Highlight tied results in addition to top 5
        </span>
      </label>

      <div className="flex flex-col justify-center items-center w-11/12">
        <textarea
          className="bg-gray-200 rounded w-full max-w-screen-md px-4 py-2"
          id="string-input"
          cols="30"
          rows="10"
          placeholder="Enter text here"
          value={inputString}
          onChange={(event) => handleTextInput(event)}
        ></textarea>
        <button
          className="bg-blue text-white font-bold py-2 px-4 rounded my-4 transform hover:scale-110 transition"
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
