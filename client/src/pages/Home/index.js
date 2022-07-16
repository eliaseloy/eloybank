import React from "react";

import { ContainerPage, TitlePage } from '../../components/Main';

import { AreaHome } from './styled';

const Home = () => {
    return (
        <ContainerPage>
            <TitlePage>
                Eloy Bank of America | Official Website
            </TitlePage>
            <AreaHome className="container">
                <h2>Personal</h2>
                <h3>Our client service team gets to know you on a personal level 
                    and manages your full Eloy Bank relationship, looking at your 
                    entire financial picture to make banking more efficient and 
                    more focused on your needs. Open a personal account now!</h3>
                <br></br>
                <br></br>
                <h2>Business Banking</h2>
                <h3>Our customizable business banking tools are designed to keep 
                    up with you, optimize your operating cash and save precious time.</h3>
                <br></br>
                <br></br>
                <h2>Investment</h2>
                <h3>When you’re ready to invest, you expect personalized advice and 
                    best-in-class service. And access to a wide range of distinct 
                    opportunities that can help you and your family achieve your goals. 
                    That’s what we provide. Delivered by a team of more than 650 experienced 
                    investment professionals in 19 cities around the world.* Because helping 
                    you meet your goals is the investment result that matters most to us.</h3>
                <br></br>
            </AreaHome>            
        </ContainerPage>
    );
}

export default Home;