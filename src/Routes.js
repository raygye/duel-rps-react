import React, {Component} from 'react';
import Home from './Home';
import Game from './Game';
import Duel from './Duel';
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
                <Route exact path="/Duel" component={Duel}/>
                <Route path="/:username" component={Game}/>
            </Router>
        )
    }
}