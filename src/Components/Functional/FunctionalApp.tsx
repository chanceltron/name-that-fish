import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { useState } from 'react';

export type ScoreType = {
  correct: number;
  incorrect: number;
};

export function FunctionalApp() {
  const [score, setScore] = useState<ScoreType>({
    correct: 0,
    incorrect: 0,
  });
  const isGameOver = score.correct + score.incorrect === 4;

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard score={score} />
          <FunctionalGameBoard score={score} setScore={setScore} />
        </>
      )}
      {isGameOver && <FunctionalFinalScore score={score} />}
    </>
  );
}
