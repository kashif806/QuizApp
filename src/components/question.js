import React from 'react';
import "../App.css" ;

function Question ({question, num}) {
   
    if(question){
        return (
            <div className="Question">
                <div className="content-centered">{num+1}).&nbsp;&nbsp;
                    {question.replace(/&quot;/g,'"')
                    .replace(/&#039;/g,"'" )
                    .replace(/&ldquo;/g,'"')
                    .replace(/&rdquo;/g,'"')
                    .replace(/&shy;/g,'-')
                    .replace(/&Eacute;/g,'É')
                    .replace(/&lsquo;/g,"'")
                    .replace(/&rsquo;/g,"'")
                    .replace(/&amp;/g,"&")
                }</div>            
            </div>
        )
    }else return (
        <div>
            Loading Questions
        </div>
    )
}

export default Question;