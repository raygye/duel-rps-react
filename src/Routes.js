import React, {Component} from 'react';
import Home from './Home';
import Game from './Game';
import Duel from './Duel';
import Results from './Results';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
export default class Routes extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Duel" component={Duel}/>
                    <Route exact path="/Defeat" render={(props) => <Results {...props} result={"DEFEAT"} />}/>
                    <Route exact path="/Tie" render={(props) => <Results {...props} result={"TIE"} />}/>
                    <Route exact path="/Victory" render={(props) => <Results {...props} result={"VICTORY"} />}/>
                    <Route path="/:username" component={Game}/>
                </Switch>
            </Router>
        )
    }
}