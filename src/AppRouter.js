import React from 'react'
import { Switch, Route, Redirect} from "react-router-dom";
import Main from '../src/components/Main/Main';
import Help from "../src/components/Help/Help";
import Users from "../src/components/Users/Users";
import Private from "../src/components/Private/Private"
import Login from '../src/components//Login/Login';


const AppRouter = () => {

    return (
        <>            
            <Switch>
            <Route exact = {true} path="/">
                   <Main/>
                </Route>

                {/* <Route exact = {true} path="/users">
                    <Users/>
                </Route> */}
                <Route exact = {true} path="/login">
                    <Login/>
                </Route>
                <Route exact = {true} path="/private"> 
                    <Private/>           
                </Route>
                <Route exact = {true} path="/help">
                    <Help/>
                </Route>
            <Redirect to = "/" />
           </Switch>

        </>

);
};
export default AppRouter