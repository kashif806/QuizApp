import React from 'react';
import "../App.css" ;

function Options ({incorrect , correct ,  selectedAnswer, hasAnswered}) {
 
    if(incorrect){ 
        var options = incorrect;

        if (!options.includes(correct)) {
            var random = Math.floor(Math.random() * (3 - 0 + 1) + 0);
            options.splice(random,0,correct);
        }       

        if(!hasAnswered){
            return (
                <div className="Options">
                    <form className="option-container content-centered">
                        {options.map((option,index) => { 
                            return(  
                                <label className="option" key ={option}>  
                                    <input type="radio" name = "options" 
                                        value={option} id={index} onChange={selectedAnswer} >
                                    </input>
                                    {option.replace(/&quot;/g,'"')
                                    .replace(/&#039;/g,"'" )
                                    .replace(/&ldquo;/g,'"')
                                    .replace(/&rdquo;/g,'"')
                                    .replace(/&shy;/g,'-')
                                    .replace(/&Eacute;/g,'É')
                                    .replace(/&lsquo;/g,"'")
                                    .replace(/&rsquo;/g,"'")
                                    .replace(/&amp;/g,"&")
                                                                        
                                    }

                                </label>                   
                            )}
                        )}
                    </form>
                </div>
            )    
        } else {
            return (
                <div className="Options">
                    <form className="option-container content-centered">
                        {options.map((option,index) => { 
                            return(  
                                <label className="option" key ={option} id={option===correct? "tick" : ""}  style={option===correct? {color:"green" , border : "5px ridge green" } : {}}>  
                                    <input type="radio" name = "options" 
                                        value={option} id={index} onChange={selectedAnswer} >
                                    </input>
                                    {option.replace(/&quot;/g,'"')
                                    .replace(/&#039;/g,"'" )
                                    .replace(/&ldquo;/g,'"')
                                    .replace(/&rdquo;/g,'"')
                                    .replace(/&shy;/g,'-')
                                    .replace(/&Eacute;/g,'É')
                                    .replace(/&lsquo;/g,"'")
                                    .replace(/&rsquo;/g,"'")
                                    .replace(/&amp;/g,"&")
                                                                       
                                    }
                            </label>                   
                            )}
                        )}
                    </form>
                </div>
            )    
        }
    }

    else{
        return(
            <div>
            Loading confusing options</div>
        )
    }
}

export default Options;