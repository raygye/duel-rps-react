import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import './Game.css'
import Waiting from './Waiting';
import Duel from './Duel';
export default class Game extends Component {
    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.gameTime = this.gameTime.bind(this);
        this.state = {gameState: "waiting", img: cookies.get("img"), username: cookies.get("username"), wins: cookies.get("wins"), games: cookies.get("games")};
    }
    gameTime() {
        this.setState({
            gameState: 'game'
        })
    }
    render() {
        let gameState = this.state.gameState ;
        if (gameState === "waiting") {
            return (
                <div className="container">
                  <Waiting username={this.props.match.params.username} gameTime = {this.gameTime}/>
                </div>
            )
        }
        else if (gameState === "game") {
            return (
                <div className="container">
                    <Duel/>
                </div>
            )
        }
    }
}