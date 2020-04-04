import React from "react";
import "./style.css";

function About() {
    return (
        <div className = "row">
            <div className="col s12">
                <h3>About Me</h3>
                <ul>
                    <li>I aspire to become a programs design engineer</li>
                    <li>Programming Interest:</li>
                    <ul>
                        <li>Computer Vision</li>
                        <li>Machine Learning</li>
                        <li>Data Manipulation</li>
                    </ul>
                    <li>Languages I am familiar with:</li>
                    <ul>
                        <li>C/C++</li>
                        <li>Matlab</li>
                        <li>Javascript</li>
                        <li>Python</li>
                    </ul>
                </ul>
                <p>In my off time I like to learn and talk about creative topics. Most of the time they have to do with the financial world or engineering.</p>
            </div>
        </div>
    );
}

export default About;