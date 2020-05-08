import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import img1 from "./imgs/rock.png";
import img2 from "./imgs/paper.png";
import img3 from "./imgs/scissors.png";
import './Duel.css'
import socketIOClient from "socket.io-client";

export default class Game extends Component {
    state = {
        selected: 1
    };
    constructor(props) {
        super(props);
        this.sel1 = this.sel1.bind(this);
        this.sel2 = this.sel2.bind(this);
        this.sel3 = this.sel3.bind(this);
        this.lock = this.lock.bind(this);
    }
    sel1(event) {
        event.preventDefault();
        this.setState({selected: 1});
    }
    sel2(event) {
        event.preventDefault();
        this.setState({selected: 2});

    }
    sel3(event) {
        event.preventDefault();
        this.setState({selected: 3});
    }
    lock(event) {
        const cookies = new Cookies();
        this.refs.btn.setAttribute("disabled", "disabled");
        event.preventDefault();
        const socket = socketIOClient(cookies.get("endpoint"));
        socket.emit('lock', {
            room: window.location.pathname.substring(1),
            username: cookies.get("username"),
            choice: this.state.selected
        });
    }

    render() {
        return (
            <div className="align-items-center">
                <h1 className="text-center">
                    Choose your weapon:
                </h1>
                <div className="card-group">
                    <input type="image" className={`${this.state.selected!==1 ? "card" : "rounded card border border-primary"}`} name="img1" src={img1} alt="img1" onClick={this.sel1}/>
                    <input type="image" className={`${this.state.selected!==2 ? "card" : "rounded card border border-primary"}`} name="img2" src={img2} alt="img2" onClick={this.sel2}/>
                    <input type="image" className={`${this.state.selected!==3 ? "card" : "rounded card border border-primary"}`} name="img3" src={img3} alt="img3" onClick={this.sel3}/>
                </div>
                <div>
                    <br/><button type="button" ref="btn" className="btn btn-block btn-outline-dark" onClick={this.lock}>LOCK IN</button>
                </div>
            </div>
        )
    }
}