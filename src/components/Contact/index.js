import React from "react";
import "./style.css";

function ContactCard() {
    return (
        <div id="res-links" className="row">
            <div className="row">
                <h4><i className="fas fa-file-contract"></i><a href="https://docs.google.com/document/d/18STztrN02bdOkvjvnFKs7__bJLvHZgE9CcKW3NsVPZo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></h4>
            </div>
            <div className="row">
                <h4><i className="fas fa-id-card"></i><a href="https://www.dropbox.com/s/i2fbhh4afhpipfw/CVAALsP19.pages?dl=0" target="_blank" rel="noopener noreferrer">CV Resume</a></h4>
            </div>
        </div>
    );
}

export default ContactCard;