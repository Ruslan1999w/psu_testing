import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"
import React from 'react';
import Main from "./Main";
import { Test } from './Test';
// import {TableFeeling};
class Routes extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/home' component={Main} />
                    <Route path='/manual' component={Main} />
                    <Route path='/random' component={Main} />
                    <Route path='/test' component={Test} />
                    <Redirect from='/' to='/home'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Routes)

