import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import {QuestionState, Difficulty} from './API';

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading,setLoading] = useState(false);
	const [questions,setQuestions] = useState<QuestionState[]>([]);
	const [number,setNumber] = useState(0);
	const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
	const [score,setScore] = useState(0);
	const [gameOver,setGameOver] = useState(true);

	console.log(questions);
	
	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		)

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	}

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

	}

	const nextQuestion = () => {

	}

  return (
    <div className="app-container">
      <h1>REACT QUIZ</h1>
			<button className="start" onClick={startTrivia}>Start</button>
			<p className="score">Score:</p>
			<p>Loading Questions...</p>
			{/* <QuestionCard 
				questionNr={number + 1} 
				totalQuestions={TOTAL_QUESTIONS} 
				question={questions[number].question} 
				answers={questions[number].answers} 
				userAnswer={userAnswers ? userAnswers[number] : undefined} 
				callback={checkAnswer}
				/> */}
			<button className='next' onClick={nextQuestion} >
				Next Question
			</button>
    </div>
  );
}

export default App;
