interface Props {
  correctAnswers: number;
}

export const Results: React.FC<Props> = ({ correctAnswers }) => {
  return (
    <div>
      <p>You finished the game - here is your score.</p>
      <p>{correctAnswers} out of 7.</p>
      <p onClick={() => window.location.reload()}>Play again? Press here!</p>
    </div>
  );
};
