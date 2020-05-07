import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import socketIOClient from 'socket.io-client';
import tie from "./imgs/tie.png";
const ENDPOINT = "http://localhost:5000/";
export default class Results extends Component {
    constructor(props) {
        super(props);
        this.return = this.return.bind(this);
    }
    return() {
        window.location.replace('./');
    }
    render() {
        return (
            <div className="container">
                <div className="row card mx-auto align-items-center align-self-center" style={{border: "none"}}>
                    <h1 className="justify-content-center">RESULT: {this.props.result}!</h1>
                    <img src={require(`./imgs/${this.props.result.toLowerCase()}.png`)} alt="tie"/>
                    <button type="button" className="btn btn-outline-secondary" onClick={this.return}>Return</button>
                </div>
            </div>
        )
    }
}