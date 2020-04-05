import React from "react";
import AppCard from "../AppCard";
import empPic from "../../Images/Employee-Database.png";
import contractPic from "../../Images/Contract-Bay.png";
import weatherPic from "../../Images/WeatherDash.png";

function Portfolio() {
    return (
        <div className = "row">
            <div className = "col s6 m4 l4">
                <AppCard img={empPic} 
                    appName="Employee Databse"
                    link="https://github.com/GhostsAg/EmployeeTracker"
                    info="Command-line database management application. Manipulate employee data by departments, roles, and salary."
                    repo="https://github.com/GhostsAg/EmployeeTracker"
                />
            </div>
            <div className = "col s6 m4 l4">
                <AppCard img={contractPic}
                    appName="Contract Bay"
                    link="https://polar-island-40995.herokuapp.com/"
                    info="Contract accessibility web application. Close the gap between supplier and manufacturer."
                    repo="https://github.com/robertharris95/Project-2"
                />
            </div>
            <div className = "col s6 m4 l4">
                <AppCard img={weatherPic}
                    appName="Weather Dashboard"
                    link="https://ghostsag.github.io/WeatherDashboard/"
                    info="Weather forecast web application. Get information about the upcoming 5-day forecast of any city."
                    repo="https://github.com/GhostsAg/WeatherDashboard"
                />
            </div>
        </div>
    );
}

export default Portfolio;