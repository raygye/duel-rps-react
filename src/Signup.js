import React, {Component} from 'react';

export default class Signup extends Component{
    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <div className="card-header">
                        <h3>Sign up</h3>
                    </div>
                    <div className="card-body">
                        <label>
                            Username
                            <br/><input type="text" id="username" placeholder="Enter username"/>
                        </label>
                        <br/><label>
                        Password
                        <br/><input type="password" id="password" placeholder="Enter password"/>
                    </label>
                        <br/><button type="submit" className="btn btn-outline-secondary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}