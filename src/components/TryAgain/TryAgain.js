import React,{useContext} from "react";
import "./TryAgain.css";
import MyContext from "../../Context/MyContext"

const TryAgain = () => {
    const {initial,type} = useContext(MyContext)
    const data = initial
    const url = "theleanprogrammer.com";
    return (
        <div data-aos="fade-up" className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                {
                    data.wpm < 20 ? (
                        <p className="text-danger">You need to Improve!! Keep Practicing..</p>
                    ) :
                    (
                        <p className="text-success">You are going Good!! Keep it up..</p>
                    )
                }
                <p>
                    <b>Characters:</b> {data.characters}
                </p>
                <p>
                    <b>Words:</b> {data.words}
                </p>
                <p>
                    <b>Speed</b> {data.wpm} wpm
                </p>
            </div>

            <div>
                <button
                    className="end-buttons start-again-btn"
                    onClick={()=>type.reStart()}
                >
                    Re-try
                </button>
                <button className="end-buttons share-btn">
                    Share
                </button>
                <button className="end-buttons tweet-btn">
                    Tweet
                </button>
            </div>
        </div>
    );
};

export default TryAgain;