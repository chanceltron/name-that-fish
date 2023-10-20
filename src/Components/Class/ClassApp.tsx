import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';

export type ScoreType = {
  correctCount: number;
  incorrectCount: number;
};

export class ClassApp extends Component<null, ScoreType> {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  setScore = (isCorrect: boolean) => {
    if (isCorrect) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }
  };

  render() {
    const totalScore = this.state.correctCount + this.state.incorrectCount;
    const isGameOver = totalScore === 4;
    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
            />
            <ClassGameBoard setScore={this.setScore} />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
          />
        )}
      </>
    );
  }
}
