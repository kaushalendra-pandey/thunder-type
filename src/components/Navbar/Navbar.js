import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <p className="flash-logo-text">Thunder-Type</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://github.com/kaushalendra-pandey"
                    rel="noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default Navbar;