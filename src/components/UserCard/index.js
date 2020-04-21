import React from "react";
import ElemContainer from "../ElemContainer";
import "./style.css";

function UserCard(props) {
    return (
        <ElemContainer addClass="elemContainer user col l4">
            <img className="pic" src={props.img} alt="UserId"></img>
            <h3>{props.name}</h3>
            <p>{props.jobTitle}</p>
            <br></br>
            <a href={props.github} target="_blank">Github </a>
             | 
            <a href={props.linkedIn} target="_blank"> LinkedIn</a>
        </ElemContainer>
    );
}

export default UserCard;