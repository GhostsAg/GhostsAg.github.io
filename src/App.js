import React from "react";
//@@ todo look into a logo.svg
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import NavTabs from "./components/Navtab";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

function App() {
  return (
    <Wrapper>
      <Header />
      <UserCard img={"../public/images/Headshot002.jpeg"}
        name={"Andres Agustin Ledesma"}
        jobTitle={"Full-Stack Web Developer"}
        github={"https://github.com/GhostsAg"} 
      />
      <Router>
        <NavTabs />
        <Route exact path = "/bio" />
     </Router>
    </Wrapper>
  );
}

export default App;