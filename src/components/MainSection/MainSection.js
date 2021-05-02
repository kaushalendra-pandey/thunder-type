import React,{useContext} from "react";
import TryAgain from "../TryAgain/TryAgain"
import TestContainer from "../TestContainer/TestContainer"
import MyContext from "../../Context/MyContext"

import './MainSection.css'

const MainSection = () => {

    const {initial} = useContext(MyContext)
    const timeRemaining = initial.timeRemaining

    return (
        <div className="test-container">
            
            {
                timeRemaining ? (
                <div data-aos="fade-up" className="typing-challenge-cont">
                    <TestContainer/>
                </div>
                ) :
                (
                 <div className="try-again-cont">
                    <TryAgain/>
                </div>
                )
            }   

        </div>
    );
};

export default MainSection;