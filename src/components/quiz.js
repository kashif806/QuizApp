import React, { useEffect, useState } from 'react';
import Question from "./question.js";
import Options from "./options.js";
import "../App.css" ;


function Quiz ({number, category, difficulty, end}) {

  const noOfQuestions = number;
  const cat = category;
  const diff = difficulty;
  const type= 'multiple'; //multiple choice
  const questionNo = 0 ;

  const [questions, setQuestions] = useState([1]);
  const [num,setNum] = useState(questionNo);
  const [answer,setAnswer] = useState("");
  const [score,setScore] = useState(0); 
  const [submitShow, setSubmitShow] = useState("block");
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const[label,setLabel]=useState();
  const [hasAnswered, setHasAnswered] = useState(false)
  const [nextShow, setNextShow] = useState("none");
 
  useEffect(()=> {    
    getQuestions();         
  },[]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${noOfQuestions}&category=${cat}&difficulty=${diff}&type=${type}`);
      const data = await response.json();
      console.log(data.response_code);

      if (data.response_code===0) {
        setFetchSuccess(true);
      }
      setQuestions(data.results);
    }
    catch(error){
      console.log(error);
      alert ("Something went wrong. Please refresh your borwser")
    }
  };

  const nextQuestion = (e) => {

    setHasAnswered(false);

    if(num === (noOfQuestions-1)) {
      e.target.disabled = "true";
      end(score);
    } 
    
    else if(num === (noOfQuestions-2))
    { 
        e.target.innerHTML = "End Quiz";
        setNum(num+1)
        setSubmitShow("block");
        setAnswer("");
        setNextShow("none");
      
      }

    else {
      setNum(num+1)
      setSubmitShow("block");
      setAnswer("");
      setNextShow("none");
    }
  
  }

  const checkAnswer = (e) => {
 
    setHasAnswered(true);
    var cross = document.createElement("cross");
    cross.innerHTML=" &#x274C;"
 
    if (questions[num].correct_answer === answer) {
      setScore(score+1);
      }

    else {
      label.appendChild(cross);
      label.style.color="black";
      label.style.border="5px ridge red";
      label.style.fontWeight="bold";
    }  

    setSubmitShow("none")
    setNextShow("block");
  }

  const onSelect = (e) => {
    setLabel(e.target.parentElement);
    setAnswer(e.target.value);
  }

  if (fetchSuccess){
    return (
      <div className="quiz">
        <Question className="Question content-centered" question = {questions[num].question} num = {num} />

        <Options incorrect = {questions[num].incorrect_answers} 
                correct = {questions[num].correct_answer} 
                selectedAnswer={onSelect}
                hasAnswered= {hasAnswered} />

        <div className="buttons-container content-centered">      
          <button onClick={checkAnswer} style={{display:submitShow}}  disabled={answer===""} >Submit Answer</button><br/>
          <button onClick={nextQuestion} style={{display:nextShow}} >Next Question</button>
        </div>

        <div className= "score content-centered">Score : {score} /{noOfQuestions} </div>
      </div>


    );
  }
  else {

    return(
      <div>
      <p className="Question content-centered">Trying to think of some good questions.</p>
      <p className = "Question content-centered" style={{color: "red"}}>If it takes more then 1 min. Please restart the quiz with different parameters.</p>
      </div>
      )
  }

}

export default Quiz;