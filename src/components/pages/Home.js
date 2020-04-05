import React from "react";
import Header from "../Header";
import UserCard from "../UserCard";
import Wrapper from "../Wrapper";
import ContentCard from "../ContentCard";
import Footer from "../Footer";
import pic from "../../Images/Profile-pic.jpeg";

function Home() {
    return (
        <Wrapper addClass="row god">
            <Header />
            <Wrapper addClass="row">
                <UserCard img = {pic}
                    name = {"Andres Agustin Ledesma"}
                    jobTitle = {"Full-Stack Web Developer"}
                    github = {"https://github.com/GhostsAg"} 
                />
                <ContentCard />
            </Wrapper>
            <Footer />
        </Wrapper>
    );
}

export default Home;
