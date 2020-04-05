import React from "react";
import "./style.css";
import logo from "../../Images/AG-logo.png";

function Header() {
    return (
        <div className="header row z-depth-4">
            <span className="col s4 push-s2 push-l4"><img src={logo}></img></span>
        </div>
    );
}

export default Header;