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
        if (this.state.logged) {
            window.location.replace('./' + this.state.username);
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