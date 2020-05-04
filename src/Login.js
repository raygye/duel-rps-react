import React, {Component} from 'react';
import './Login.css'

export default class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log(event.target.checkValidity());
        event.preventDefault();
        if(!event.target.checkValidity()) {
            console.log('bad');
            return;
        }
        const data = new FormData(event.target);
        fetch('http://localhost:5000/users/add', {
            method: 'POST',
            body: data
        }).then(
            function(response) {
                response.text().then(function(data) {
                    console.log(data);
                });
            })
    }
  render() {
      return (
          <div className="card">
                  <form onSubmit={this.handleSubmit}>
                          <div className="card-header">
                              <h3>Log in</h3>
                          </div>
                          <div className="card-body">
                              <label>
                                    Username
                                  <br/><input type="text" id="pass" name="username" placeholder="Enter username" required/>
                              </label>
                              <br/><label>
                                  Password
                                  <br/><input type="password" id="logPass" name="password" placeholder="Enter password" required/>
                              </label>
                              <br/><button type="submit" className="btn btn-outline-secondary">Submit</button>
                          </div>
                  </form>
          </div>
      );
  }
}