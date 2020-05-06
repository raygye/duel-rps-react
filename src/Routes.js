import React, {Component} from 'react';
import Home from './Home'
import Game from './Game'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Routes extends Component{
    render() {
        return(
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/:username" component={Game}/>
            </Router>
        )
    }
}