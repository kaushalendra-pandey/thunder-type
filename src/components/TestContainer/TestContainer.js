import React,{useContext} from "react";
import DetailCard from '../DetailCards/DetailCard'
import "./TestContainer.css";
import TypingChallenge from "../TypingChallenge/TypingChallenge"
import MyContext from "../../Context/MyContext"

const TestContainer = () => {
    const {initial} = useContext(MyContext)
    const data = initial
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                {/* Words Typed */}
                <DetailCard cardName="Words" cardValue={data.words} />

                {/* Characters Typed */}
                <DetailCard
                    cardName="Characters"
                    cardValue={data.characters}
                />

                {/* Mistakes */}
                <DetailCard cardName="WPM" cardValue={data.wpm} />

            </div>

            <div className="typewriter-container">
                <TypingChallenge/>
            </div>
        </div>
    );
};

export default TestContainer;