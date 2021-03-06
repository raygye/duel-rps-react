import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import Login from './Login';
import Signup from './Signup';
import duel from './imgs/duel.png';
export default class Home extends Component {
    constructor() {
        super();
        const cookies = new Cookies();
        this.state = {logged: cookies.get("logged"), username: cookies.get("username")};
    }
    componentDidMount() {
        const cookies = new Cookies();
        if (cookies.get("endpoint") === undefined || cookies.get("endpoint") === 'null') {
            let endpoint = prompt("Please contact gary.ye@uwaterloo.ca for a demo. If demoing, please enter the ngrok endpoint: ", "");
            cookies.set("endpoint", endpoint);
        }
        if (this.state.username === "") {
            this.setState({logged: false});
        }
        else if (this.state.logged) {
            this.props.history.push('./' + this.state.username);
        }
    }

    render() {
        return(
            <div className="container">
                <div>
                    <img src={duel} alt="duel" style={{width: "150px"}}/>
                </div>
                <div className="card-group">
                    <Login/>
                    <Signup/>
                </div>
            </div>
        )
    }
}