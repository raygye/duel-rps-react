import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import img1 from'./imgs/img1.png'
import img2 from'./imgs/img2.png'
import img3 from'./imgs/img3.png'
import duel from './imgs/duel.png';
export default class Waiting extends Component {
    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.state = {img: cookies.get("img"), username: cookies.get("username"), wins: cookies.get("wins"), games: cookies.get("games")};
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
                    <div className="card d-flex align-items-center" id="leftCard">
                        <h1>
                            {this.props.username}
                        </h1>
                        <img className="rounded border border-secondary" src={`${this.state.img==='1' ? img1 : this.state.img==='2' ? img2 : img3}`} alt="img" style={{width: '150px'}}/>
                        <br/><br/><h2>Wins: {this.state.wins}</h2>
                        <h2>Games Played: {this.state.games}</h2>
                        <br/><button type="button" className="btn btn-outline-dark" onClick={this.props.gameTime}>READY</button>
                        <br/>
                    </div>
                    <div className="card d-flex justify-content-center" id="rightCard">
                        <div className="mx-auto">
                            <h5>Waiting for opponent...</h5>
                        </div>
                        <div className="mx-auto spinner-border">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}