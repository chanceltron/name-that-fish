import { Component } from 'react';
import { ScoreType } from './ClassApp';

export class ClassFinalScore extends Component<ScoreType> {
  render() {
    const correctCount = this.props.correctCount;
    const totalCount = this.props.correctCount + this.props.incorrectCount;
    return (
      <div id='final-score'>
        <h1>Your Final Score Was</h1>
        <div id='score'>
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
