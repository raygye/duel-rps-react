import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import './Game.css'
import img1 from'./imgs/img1.png'
import img2 from'./imgs/img2.png'
import img3 from'./imgs/img3.png'
import duel from './imgs/duel.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {gameState: "await"};
    }
    render() {
        return(
            <div className="container">
                <div>
                    <img src={duel} alt="duel" style={{width: "150px"}}/>
                </div>
                <div className="card-group">
                    <div className="card">
                        <h1 style={{textAlign: "center"}}>
                            {this.props.match.params.username}
                        </h1>
                    </div>
                    <div className="card">

                    </div>
                </div>
            </div>
        )
    }
}