import React from "react";

import { ContainerPage, TitlePage } from '../../components/Main';

import { AreaAdmin } from './styled';

const Admin = () => {
    return (
        <ContainerPage>
            <TitlePage>
                Eloy Bank of America | Official Website
            </TitlePage>
            <AreaAdmin className="container">
                <h2>Personal</h2>
                <h3>Our!</h3>
                <br></br>
                <br></br>
                <h2>Business Banking</h2>
                <h3>Our.</h3>
                <br></br>
                <br></br>
                <h2>Investment</h2>
                <h3>When.</h3>
                <br></br>
            </AreaAdmin>            
        </ContainerPage>
    );
}

export default Admin;