import cup from '../assets/cup.png';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <img src={cup} alt="" />
      <h2>Congratulations!</h2><br />
      <h3>Your Score</h3>
      <p>{`You scored ${score} out of ${totalQuestions}`}</p>
      <a href="/"><button className='btn-bg'>Restart Quiz</button></a>
    </div>
  );
};

export default Result;
