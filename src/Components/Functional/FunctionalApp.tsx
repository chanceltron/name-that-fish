import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';

export function FunctionalApp() {
  const submitGuess = (guess: string) => {
    console.log(guess);
  };

  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard submitGuess={submitGuess} />
      {false && <FunctionalFinalScore />}
    </>
  );
}
