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
        const cookies = new Cookies();
        this.state = {gameState: "await", img: cookies.get("img"), username: cookies.get("username"), wins: cookies.get("wins"), games: cookies.get("games")};
    }

    componentDidMount() {
        fetch('http://localhost:5000/rooms/' + this.state.username, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": this.state.username})
        }).then(
            function(response) {
                response.json().then(function (data) {
                    const cookies = new Cookies();
                    cookies.set('img', data.img, {path: '/'});
                    cookies.set('wins', data.wins, {path: '/'});
                    cookies.set('games', data.games, {path: '/'});
                });
            })
    }

    render() {
        return(
            <div className="container">
                <div>
                    <img src={duel} alt="duel" style={{width: "150px"}}/>
                </div>
                <div className="card-group">
                    <div className="card d-flex align-items-center " id="leftCard">
                        <h1>
                            {this.props.match.params.username}
                        </h1>
                        <img className="rounded border border-secondary" src={`${this.state.img==='1' ? img1 : this.state.img==='2' ? img2 : img3}`} alt="img" style={{width: '150px'}}/>
                        <h2>Wins: {this.state.wins}</h2>
                        <h2>Games Played: {this.state.games}</h2>
                    </div>
                    <div className="card d-flex align-items-center " id="rightCard">

                    </div>
                </div>
            </div>
        )
    }
}