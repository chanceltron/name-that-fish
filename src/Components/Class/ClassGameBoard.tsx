import { Component } from 'react';
import './styles/game-board.css';
import { Images } from '../../assets/Images';

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
  setScore: (arg: boolean) => void;
};

export class ClassGameBoard extends Component<IProps> {
  state = {
    nextFishToName: initialFishes[0],
    input: '',
  };

  submitGuess = (guess: string) => {
    const nextFishToName = this.state.nextFishToName;
    const nextFishIndex =
      initialFishes.indexOf(nextFishToName) + 1 < initialFishes.length
        ? initialFishes.indexOf(nextFishToName) + 1
        : 0;
    const isGuessCorrect = guess === nextFishToName.name;
    this.props.setScore(isGuessCorrect);
    this.setState({ nextFishToName: initialFishes[nextFishIndex], input: '' });
  };

  render() {
    const nextFishToName = this.state.nextFishToName;
    return (
      <div id='game-board'>
        <div id='fish-container'>
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id='fish-guess-form'
          onSubmit={(e) => {
            e.preventDefault();
            this.submitGuess(this.state.input);
          }}>
          <label htmlFor='fish-guess'>What kind of fish is this?</label>
          <input
            type='text'
            name='fish-guess'
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}
