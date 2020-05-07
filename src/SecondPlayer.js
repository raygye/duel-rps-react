import React, {Component} from 'react';

export default class SecondPlayer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.present) {
            return (
                <div className="card d-flex align-items-center" id="leftCard">
                    <h1>
                        {this.props.username}
                    </h1>
                    <img className="rounded border border-secondary" src={require(`./imgs/img${this.props.img}.png`)} alt="img" style={{width: '150px'}}/>
                    <br/><br/><h2>Wins: {this.props.wins}</h2>
                    <h2>Games Played: {this.props.games}</h2>
                    <br/>
                </div>
            )
        }
        else {
            return (
                <div className="card d-flex justify-content-center" id="rightCard">
                    <div className="mx-auto">
                        <h5>Waiting for opponent...</h5>
                    </div>
                    <div className="mx-auto spinner-border">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    }
}