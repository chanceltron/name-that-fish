import './styles/game-board.css';
import { Images } from '../../assets/Images';
import { Dispatch, SetStateAction, useState } from 'react';
import { ScoreType } from './FunctionalApp';

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

type IProps = {
  score: ScoreType;
  setScore: Dispatch<SetStateAction<ScoreType>>;
};

export function FunctionalGameBoard({ setScore }: IProps) {
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);
  const [input, setInput] = useState('');

  const submitGuess = (guess: string) => {
    const nextFishIndex =
      initialFishes.indexOf(nextFishToName) + 1 < initialFishes.length
        ? initialFishes.indexOf(nextFishToName) + 1
        : 0;
    if (guess === nextFishToName.name) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
    setNextFishToName(initialFishes[nextFishIndex]);
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
