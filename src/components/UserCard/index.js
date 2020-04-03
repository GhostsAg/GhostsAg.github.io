import React from "react";
import ElemContainer from "../ElemContainer";
import "./style.css";

function UserCard(props) {
    return (
        <ElemContainer>
            <img className="pic" src={props.img} alt="UserId"></img>
            <h3>{props.name}</h3>
            <p>{props.jobTitle}</p>
            <br></br>
            <a href={props.github}>Github</a>
        </ElemContainer>
    );
}

export default UserCard;