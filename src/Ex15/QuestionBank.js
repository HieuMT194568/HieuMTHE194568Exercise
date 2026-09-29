import React, { useReducer } from 'react';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      id: 3,
      question: 'Which hook is used to manage complex state in React?',
      options: ['useEffect', 'useContext', 'useReducer', 'useRef'],
      answer: 'useReducer',
    },
    {
      id: 4,
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      answer: 'Pacific',
    },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };
    case 'NEXT_QUESTION': {
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: nextQuestion,
        selectedOption: '',
        showScore: nextQuestion === state.questions.length,
      };
    }
    case 'RESTART_QUIZ':
      return initialState;
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' });
  };

  return (
    <div className="container my-4">
      <h2>2. Question Bank</h2>
      <div className="card p-4" style={{ maxWidth: 600 }}>
        {showScore ? (
          <div>
            <h4>Your score: {score} / {questions.length}</h4>
            <button className="btn btn-primary mt-2" onClick={handleRestartQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <div>
            <p className="text-muted">Question {currentQuestion + 1} / {questions.length}</p>
            <h4>{questions[currentQuestion].question}</h4>
            <div className="d-grid gap-2 my-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  className={`btn ${selectedOption === option ? 'btn-success' : 'btn-outline-secondary'}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button className="btn btn-primary" onClick={handleNextQuestion} disabled={!selectedOption}>
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionBank;
