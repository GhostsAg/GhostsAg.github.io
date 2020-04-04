import React from "react";
import AppCard from "../AppCard";
import "./style.css";

function Portfolio() {
    return (
        <div className = "row">
            <h3>My Apps</h3>
            <div className = "col s6">
                <AppCard img="" 
                    appName="Employee Databse"
                    link="https://github.com/GhostsAg/EmployeeTracker"
                    info="Command-line application that allows you to input and manipulate employee data by departments, roles, and salary."
                    repo="https://github.com/GhostsAg/EmployeeTracker"
                />
            </div>
            <div className = "col s6">
                <AppCard img=""
                    appName="Contract Bay"
                    link="https://polar-island-40995.herokuapp.com/"
                    info="Contract accessibility web application to close the gap between supplier and manufacturer/retailer."
                    repo="https://github.com/robertharris95/Project-2"
                />
            </div>
            <div className = "col s6">
                <AppCard img=""
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