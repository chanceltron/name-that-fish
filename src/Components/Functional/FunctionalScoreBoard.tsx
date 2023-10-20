import { ScoreType } from './FunctionalApp';
import './styles/score-board.css';
//  Where the score is presented

const answersKey = ['trout', 'salmon', 'tuna', 'shark'];

export function FunctionalScoreBoard({ score }: { score: ScoreType }) {
  const answerCount = score.correct + score.incorrect;
  const answersLeft = answersKey.slice(answerCount);
  return (
    <div id='score-board'>
      <div>Incorrect 🔻: {score.incorrect}</div>
      <div id='choices-left'>
        {answersLeft.map((answer) => (
          <div key={answer} className='choice'>
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {score.correct}</div>
    </div>
  );
}
