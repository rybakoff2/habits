import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import Main from '../src/components/Main/Main';
import Help from "../src/components/Help/Help";
import Private from "./components/Private/Private"
import Habit from "./pages/Habit/Habit";
import Login from "./pages/Login/Login";
import CreateHabit from "./pages/CreateHabit/CreateHabit";


const AppRouter = () => {

    return (
        <>
            <Switch>
                <Route exact={true} path="/">
                    <Main/>
                </Route>
                <Route exact={true} path="/login">
                    <Login/>
                </Route>
                <Route exact={true} path="/private">
                    <Private/>
                </Route>
                <Route exact={true} path="/help">
                    <Help/>
                </Route>
                <Route exact={true} path="/habit/:id">
                   <Habit />
                </Route>
                <Route exact={true} path="/create">
                    <CreateHabit />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </>
    );
};
export default AppRouter
