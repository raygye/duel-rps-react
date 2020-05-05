import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';
import duel from './imgs/duel.png';
export default class Home extends Component {
    componentDidMount() {
        fetch('http://localhost:5000/users/checkLogged', {
            method: 'GET'
        }).then(
            function(response) {
                response.text().then(function(data) {
                    console.log(data);
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
                    <Login/>
                    <Signup/>
                </div>
            </div>
        )
    }
}