import React from 'react';
import "../App.css" ;

function EndOFQuiz ({finalScore , restart , number}) {
    
    return(
  // trying some inline styling
        <div className="content-centered" 
            style={{display : "flex", 
            flexDirection:"column", 
            background:"rgba(0,0,0,0.9)", 
            height:"100%", 
            width:"100%", 
            position:"fixed", 
            zIndex:"1"}}>
       
            <p style={{marginTop:"0", 
                fontSize: "2rem", 
                alignSelf:"center", 
                color: "white"}}>
                Your final score is : {finalScore}/{number} ({Math.round((finalScore*100/number)*100)/100}%)</p>
            
            <button onClick={restart} 
                style={{alignSelf:"center" , 
                width: "200px", 
                border : "2px ridge tomato" ,
                color:"White" ,
                marginTop:"0"}}>
                Restart</button>
        </div>
    )

}
export default EndOFQuiz;