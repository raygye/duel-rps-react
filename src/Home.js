import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';
export default class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="card-group">
                    <Login/>
                    <Signup/>
                </div>
            </div>
        )
    }
}