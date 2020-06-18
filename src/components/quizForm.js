import React from 'react';
import "../App.css" ;


function QuizForm({getProperties}) {

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const quizProperties = [];

        for (let index = 0; index < 3; index++) {
            quizProperties.push((e.target)[index].value)
        }        

        getProperties(quizProperties);
    }

    return (
        <div className="form-container content-centered">
        <form className="quizForm content-centered" onSubmit={handleSubmit}>
        
            <label>Number of Questions (between 1 and 20):</label>
            <input type="number"  required name="quantity" defaultValue="5" min="1" max="20">
            </input>

            <label>Choose a category:</label>
            <select tname="category">
                <option value="9">General Knowledge</option>
                <option value="17">Science & Nature</option>
                <option value="18">Computers</option>
                <option value="23">History</option>
                <option value="27">Animals</option>
            </select>

            <label>Choose difficulty level</label>
            <select name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            
            <input type="submit" value = "Launch Quiz"></input>
            <p style={{ alignSelf:"center" , color:"black", fontSize :"1rem", margin:"5"}}>Questions Sourced from https://opentdb.com/</p>
                           
        </form>
        </div>
    )

} 

export default QuizForm;