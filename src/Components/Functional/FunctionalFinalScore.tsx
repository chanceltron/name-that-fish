import { ScoreType } from './FunctionalApp';
import './styles/final-score.css';

export const FunctionalFinalScore = ({ score }: { score: ScoreType }) => {
  const totalCount = score.correct + score.incorrect;
  return (
    <div id='final-score'>
      <h1>Your Final Score Was</h1>
      <div id='score'>
        <p>{score.correct}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};
