import './styles/game-board.css';
import { Images } from '../../assets/Images';
import { useState } from 'react';

const initialFishes = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

export function FunctionalGameBoard() {
  const [input, setInput] = useState('');
  const nextFishToName = initialFishes[0];

  const submitGuess = (guess: string) => {
    console.log(guess);
  };

  return (
    <div id='game-board'>
      <div id='fish-container'>
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id='fish-guess-form'
        onSubmit={(e) => {
          e.preventDefault();
          submitGuess(input);
          setInput('');
        }}>
        <label htmlFor='fish-guess'>What kind of fish is this?</label>
        <input
          type='text'
          name='fish-guess'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  );
}
