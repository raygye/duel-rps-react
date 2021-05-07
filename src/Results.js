import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
class Results extends Component {
    constructor(props) {
        super(props);
        this.return = this.return.bind(this);
    }
    return() {
        this.props.history.push('./');
        window.location.reload();
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
export default withRouter(Results);