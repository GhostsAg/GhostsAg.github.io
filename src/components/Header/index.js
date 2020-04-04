import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="header row z-depth-4">
            <span className="col s4 push-s2 push-l4"><img src={process.env.PUBLIC_URL + "/images/AG-logo.png"}></img></span>
        </div>
    );
}

export default Header;