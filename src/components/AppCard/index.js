import React from "react";
import "./style.css";

// props: img, appName, link, info and repo.
function AppCard(props) {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.img} />
            </div>
            <div className="card-content">
                <span id="appName" className="card-title activator grey-text text-darken-4">{props.appName}<i className="material-icons right">more_vert</i></span>
                <p><a href={props.link}>Open App</a></p>
            </div>
            <div className="card-reveal">
                <span id="appName" className="card-title grey-text text-darken-4">{props.appName}<i className="material-icons right">close</i></span>
                <p id="info">{props.info}</p>
                <p><a href={props.repo}>Repo</a></p>
            </div>
        </div>
    );
}

export default AppCard;