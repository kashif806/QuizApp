import React, {useState} from 'react';
import Quiz from "./components/quiz.js";
import QuizForm from "./components/quizForm.js";
import ErrorBoundary from "./components/errorBoundary.js";
import EndOfQuiz from "./components/endOfQuiz";
import './App.css';


function App() {

  const [showQuiz, setShowQuiz] = useState(false);
  const [showQuizForm, setShowQuizForm] = useState(true);
  const [showEnd, setShowEnd] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [header, setHeader] = useState("Set Quiz Parameters")
  const [quizProperties, setQuizProperties]= useState ({
      number : 0,
      category : "",
      difficulty : ""
  })

  const getProperties = (arr) => {
    setQuizProperties({
      number : arr[0],
      category : arr[1],
      difficulty : arr[2],
    })
    setShowQuizForm(false);
    setShowQuiz(true);
    setHeader("Quiz")
  }

  const end = (score) => {
    setFinalScore(score);
    setShowEnd ("true");
    setHeader("End of Quiz");
    setShowQuiz(false);
  }

  const restart = () => {
    console.log("Restart");
    setShowEnd(false);
    setShowQuiz(false);
    setShowQuizForm(true);
    setHeader("Set Quiz Parameters")
  }

  

  return (
    <div className="App">
      <ErrorBoundary>   

        <header className="header content-centered">
          <h1>{header}</h1>
        </header>
        
        <div>{showEnd ? <EndOfQuiz finalScore = {finalScore} restart={restart} number={quizProperties.number}/> : ""}</div>
        
        <div>{showQuizForm ? <QuizForm getProperties={getProperties} /> : ""}</div> 
  
        <ErrorBoundary>
          <div >{showQuiz ? (<Quiz number={quizProperties.number}  category={quizProperties.category} difficulty={quizProperties.difficulty} end={end}/>) : ""}</div> 
        </ErrorBoundary>
  
      </ErrorBoundary>
    </div>    
  );
}

export default App;