import React, {Component} from 'react';
import Cookies from 'universal-cookie';
export default class Game extends Component {
    constructor() {
        super();
        this.state = {gameState: "await"};
    }
    render() {
        return(
            <div className="container">
                <div className="card-group">

                </div>
            </div>
        )
    }
}