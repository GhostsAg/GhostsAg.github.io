import React from "react";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import Wrapper from "../components/Wrapper";
import ContentCard from "../components/ContentCard";
import Footer from "../components/Footer";
import pic from "../Images/Profile-pic.jpeg";

function Home() {
    return (
        <Wrapper addClass="row god">
            <Header />
            <Wrapper addClass="row">
                <UserCard img = {pic}
                    name = {"Andres Agustin Ledesma"}
                    jobTitle = {"Full-Stack Web Developer"}
                    github = {"https://github.com/GhostsAg"} 
                    linkedIn = "https://www.linkedin.com/in/andres-ledesma-9388b0197/"
                />
                <ContentCard />
            </Wrapper>
            <Footer />
        </Wrapper>
    );
}

export default Home;
