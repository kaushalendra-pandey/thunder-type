import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";


const Banner = () => {
    return (
        <div className="landing-container bg-dark">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type</h1>
                <div className="typewriter-container text-danger">
                    <Typewriter
                        options={{
                            strings: ["Fast?", "Correct?", "Quick?"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img
                    className="img-thumbnail"
                    data-aos="fade-left"
                    className="flash-image"
                    src="http://www.clker.com/cliparts/L/j/U/f/3/O/thunder-bolt-plain-hi.png"
                    alt="flash"
                />
            </div>
        </div>
    );
};

export default Banner;