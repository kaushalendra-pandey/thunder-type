import React,{useContext,useEffect} from "react";
import "./TypingChallenge.css";
import TestLetter from "../TestLetter/TestLetter"
import MyContext from "../../Context/MyContext"

const TypingChallenge = () => {

    const {initial,type} = useContext(MyContext)
    const data = initial
    var timeRemaining = data.timeRemaining
    var timer = null
    const onChangeHandler = (e) => {
        const inputValue = e.target.value
        if(!data.timeStarted){
            type.startTimer()
            
            timer = setInterval(anim,1000)
            setTimeout(()=>clearInterval(timer),60000)

            
        }

        const characters = inputValue.length
        const words = inputValue.split(" ").length
        const index = characters - 1

        if(index < 0)
        {
            type.manageUnderflow({characters,words})
            return
        }

        else if(index >= data.selectedParagraph.length-1){
            type.manageOverflow({characters,words})
            return
        }

        else{
            type.normalCase({characters,words,inputValue,index})
        }


        


    }

    function anim() {
        if (timeRemaining === 0)
        clearInterval(timer)
        else
        type.updateTimer()

    }
    
   useEffect(() => {
       
    }, [])

    return (
        <div className="typing-challenge">
            <div className="timer-container">
                {
                    data.timeStarted ? 
                        <p className="timer">
                        {`00:${data.timeRemaining>=10 ? data.timeRemaining : `0${data.timeRemaining}`}`}
                        </p> :
                        <p className="timer-info fs-3">
                            Keep Calm and write..
                        </p>
                }
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <div className="textarea test-paragraph">
                        {/* {data.selectedParagraph} */}
                        {
                            data.testInfo.map((cur,index)=> {
                                return (
                                   <TestLetter key={index} individualLetterInfo={cur}/>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onChangeHandler(e)}
                        className="textarea"
                        placeholder="write here.."
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypingChallenge;