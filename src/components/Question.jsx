import React,{useState} from 'react';

const Question = ({ question, onAnswer }) => {
  const [answerBg, setAnserBg] = useState(''); 
  const handleOptionSelect = (selectedOption) => {
    onAnswer(selectedOption);
    setAnserBg('btn-bg')
  };

  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
