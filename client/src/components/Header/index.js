import React from "react";
import { Link } from 'react-router-dom';

import { AreaHeader } from './styled';

function Header(){
    return (
        <AreaHeader>
            <div className="containerHeader">
                <nav>
                    <ul>
                        <img src="../../../eloylogo.png" alt="logo" />
                        <li><Link to={"/Admin"}>Admin</Link></li>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/OpenAccount"}>Open Account</Link></li>
                        <li><Link to={"OnlineBanking"}>Online Banking</Link></li>
                    </ul>
                </nav>
                <div className="logo">
                </div>
            </div>
        </AreaHeader>
    );
}

export default Header;