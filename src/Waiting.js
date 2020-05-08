import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import socketIOClient from 'socket.io-client';
import duel from './imgs/duel.png';
import SecondPlayer from "./SecondPlayer";
export default class Waiting extends Component {
    constructor(props) {
        super(props);
        this.state = {img: 0,
            username: window.location.pathname.substring(1),
            wins: -1,
            games: -1,
            secondPlayer: false,
            user2: "",
            wins2: -1,
            games2: -1,
            img2: 0
        };
        this.readyButton = this.readyButton.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    readyButton() {
        const cookies = new Cookies();
        if (this.state.username === cookies.get("username") && this.state.secondPlayer) {
            const socket = socketIOClient(cookies.get("endpoint"));
            socket.emit('gametime', this.state.username);
        }
    }
    logOut() {
        const cookies = new Cookies();
        cookies.remove("games");
        cookies.remove("wins");
        cookies.remove("img");
        cookies.set("username", "");
        cookies.set("logged", false);
        window.location.replace('./');
    }
    componentDidMount() {
        const cookies = new Cookies();
        fetch(cookies.get("endpoint") + '/rooms/' + this.state.username, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": this.state.username})
        }).then(
            (response) => {
                response.json().then((data) => {
                    this.setState({img: data.img, wins: data.wins, games: data.games});
                });
            });
        const socket = socketIOClient(cookies.get("endpoint"));
        socket.on("connect", () => {
            const cookies = new Cookies();
            socket.emit('room', this.state.username);
            if (cookies.get("username") !== this.state.username) {
                socket.emit('user', {
                    username: cookies.get("username"),
                    img: cookies.get("img"),
                    wins: cookies.get("wins"),
                    games: cookies.get("games")
                });
            }
        });
        socket.on("waiting", () => {
            this.props.waitTime();
            this.setState({
                secondPlayer: false
            });
        });
        socket.on("ready", () => {
            this.setState({
                secondPlayer: true
            });
        });
        socket.on("start", () => {
            this.props.gameTime();
        });
        socket.on("Full", () => {
            alert('The game room is full (max players: 2)');
        });
        socket.on("SecondPlayer", (data) => {
            this.setState({
                user2: data.username,
                img2: data.img,
                wins2: data.wins,
                games2: data.games,
                present: true
            })
        });
        socket.on('results', (data) => {
            const cookies = new Cookies();
            let win = false;
            if (data.tie) {
                window.location.replace('./Tie');
            }
            else if (data.winner === cookies.get("username")){
                window.location.replace('./Victory');
                win = true;
            }
            else {
                window.location.replace('./Defeat');
            }
            fetch(cookies.get("endpoint") + '/users/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": cookies.get("username"),
                    "win": win
                })
            }).then(
                (response) => {
                    response.json().then((data) => {
                        cookies.set("wins", parseInt(cookies.get("wins"), 10)+1);
                        cookies.set("games", parseInt(cookies.get("games"), 10)+1);
                    });
            });
        });
    }

    render() {
        return(
            <div className="container">
                <div className="p-3 w-100">
                    <img src={duel} alt="duel" style={{width: "150px"}}/>
                    <button type="button" className="btn btn-outline-dark float-right" onClick={this.logOut}>Log out</button>
                </div>
                <div className="card-group">
                    <div className="card d-flex align-items-center" id="leftCard">
                        <h1>
                            {this.state.username}
                        </h1>
                        <img className="rounded border border-secondary" src={require(`./imgs/img${this.state.img}.png`)} alt="img" style={{width: '150px'}}/>
                        <br/><br/><h2>Wins: {this.state.wins}</h2>
                        <h2>Games Played: {this.state.games}</h2>
                        <br/><button type="button" className="btn btn-outline-dark" onClick={this.readyButton}>READY</button>
                        <br/>
                    </div>
                    <SecondPlayer present={this.state.secondPlayer} img={this.state.img2} wins={this.state.wins2} games={this.state.games2} username={this.state.user2}/>
                </div>
            </div>
        )
    }
}