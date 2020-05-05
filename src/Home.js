import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';
import duel from './imgs/duel.png';
export default class Home extends Component {
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