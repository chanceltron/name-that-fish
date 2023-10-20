import { Component } from 'react';
import './styles/score-board.css';
import { ScoreType } from './ClassApp';

const answersKey = ['trout', 'salmon', 'tuna', 'shark'];

export class ClassScoreBoard extends Component<ScoreType> {
  render() {
    const { correctCount, incorrectCount } = this.props;
    const answerCount = correctCount + incorrectCount;
    const answersLeft = answersKey.slice(answerCount);
    return (
      <div id='score-board'>
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id='choices-left'>
          {answersLeft.map((answer) => (
            <div key={answer} className='choice'>
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
