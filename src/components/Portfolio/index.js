import React from "react";
import AppCard from "../AppCard";
import "./style.css";

function Portfolio() {
    return (
        <div className = "row">
            <div className = "col s6">
                <AppCard img={process.env.PUBLIC_URL + "/images/Employee-Database.png"} 
                    appName="Employee Databse"
                    link="https://github.com/GhostsAg/EmployeeTracker"
                    info="Command-line application that allows you to input and manipulate employee data by departments, roles, and salary."
                    repo="https://github.com/GhostsAg/EmployeeTracker"
                />
            </div>
            <div className = "col s6">
                <AppCard img={process.env.PUBLIC_URL + "/images/Contract-Bay.png"}
                    appName="Contract Bay"
                    link="https://polar-island-40995.herokuapp.com/"
                    info="Contract accessibility web application to close the gap between supplier and manufacturer."
                    repo="https://github.com/robertharris95/Project-2"
                />
            </div>
            <div className = "col s6">
                <AppCard img={process.env.PUBLIC_URL + "/images/WeatherDash.png"}
                    appName="Weather Dashboard"
                    link="https://ghostsag.github.io/WeatherDashboard/"
                    info="Weather forecast web application. Get information about the upcoming 5-days of any city."
                    repo="https://github.com/GhostsAg/WeatherDashboard"
                />
            </div>
        </div>
    );
}

export default Portfolio;