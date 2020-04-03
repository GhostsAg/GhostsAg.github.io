import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="row">
            <li className = "nav-item col s4">
                <Link to = "/bio" className = { location.pathname === "/bio" ? "nav-link active" : "nav-link" } >
                    Bio
                </Link>
            </li>
            <li className = "nav-item col s4">
                <Link to = "/portfolio" className = { location.pathname === "/portfolio" ? "nav-link active" : "nav-link" } >
                    Portfolio
                </Link>
            </li>
            <li className = "nav-item col s4">
                <Link to = "/contact" className = { location.pathname === "/portfolio" ? "nav-link active" : "nav-link" } >
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
