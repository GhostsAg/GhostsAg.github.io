import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ElemContainer from "../ElemContainer";
import NavTab from "../Navtab";
import About from "../About";
import Portfolio from "../Portfolio";
import "./style.css";

function ContentCard() {
    return (
        <ElemContainer>
            <Router>
                <NavTab />
                <Route path={`/about`} component={About} />
                <Route path={`/portfolio`} component={Portfolio} />
                {/* <Route path={`/contact`} component={Contact} /> */}
            </Router>
        </ElemContainer>
    );
}

export default ContentCard;