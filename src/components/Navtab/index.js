import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="row">
            <li className = "nav-item col s4">
                <Link to = "/about" className = { location.pathname === "/about" ? "nav-link active" : "nav-link" } >
                    About
                </Link>
            </li>
            <li className = "nav-item col s4">
                <Link to = "/portfolio" className = { location.pathname === "/portfolio" ? "nav-link active" : "nav-link" } >
                    Portfolio
                </Link>
            </li>
            <li className = "nav-item col s4">
                <Link to = "/contact" className = { location.pathname === "/portfolio" ? "nav-link active" : "nav-link" } >
                    Leave a Message
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
