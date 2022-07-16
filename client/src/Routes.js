import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import OpenAccount from './pages/OpenAccount';
import OnlineBanking from './pages/Login';


//eslint-disable-next-line
export default () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Admin">
                    <Admin />
                </Route>
                <Route exact path="/OpenAccount">
                    <OpenAccount />
                </Route>
                <Route exact path="/OnlineBanking">
                    <OnlineBanking />
                </Route>
            </Switch>
    );
};
