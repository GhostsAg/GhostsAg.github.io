import React from "react";
import Header from "../Header";
import UserCard from "../UserCard";
import Wrapper from "../Wrapper";
import ContentCard from "../ContentCard";

function Home() {
    return (
        <Wrapper>
            <Header />
            <UserCard img = {process.env.PUBLIC_URL + "/images/Profile-pic.jpeg"}
                name = {"Andres Agustin Ledesma"}
                jobTitle = {"Full-Stack Web Developer"}
                github = {"https://github.com/GhostsAg"} 
                />
            <ContentCard />
        </Wrapper>
    );
}

export default Home;
