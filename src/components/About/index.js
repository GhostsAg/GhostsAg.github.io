import React from "react";
import "./style.css";

function About() {
    return (
        <div className = "row">
            <div className="col s12">
            <p>I aspire to be a programs design engineer.</p>
                <ul id="list">
                Programming Interest:
                    <li>Computer Vision</li>
                    <li>Machine Learning</li>
                    <li>Data Manipulation</li>
                </ul>    
                <ul id="list">
                    Programming Languages:
                    <li>C/C++</li>
                    <li>Matlab</li>
                    <li>Javascript</li>
                    <li>Python</li>
                </ul>
                <p>In my off time I like to learn and talk about creative topics. Most of the time they have to do with the financial world or engineering.</p>
            </div>
        </div>
    );
}

export default About;