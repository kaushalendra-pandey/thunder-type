import React,{useContext,useEffect} from "react";
import MainSection from "../MainSection/MainSection"
import "./ChallengeSection.css";
import MyContext from "../../Context/MyContext"
import {SAMPLE_PARAGRAPHS} from "../../paragraphs/para"

// const URI = "http://metaphorpsum.com/paragraphs/1/9"

const ChallengeSection = () => {

    const {initial,type} = useContext(MyContext)
    
    const apiCall = () => {
        // fetch(URI)
        // .then(res => res.text())
        // .then(info=>{
        //     type.updateParagraph(info)
        //     type.setTestInfo(info)
        // })
        const data =
            SAMPLE_PARAGRAPHS[
                Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
            ];
        type.updateParagraph(data)
        type.setTestInfo(data)
    }

    useEffect(() => {
        apiCall()
    },[initial.id])

    return (
        <div className="challenge-section-container bg-dark">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <MainSection></MainSection>
        </div>
    );
};

export default ChallengeSection;