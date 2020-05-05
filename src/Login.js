import React, {Component} from 'react';

export default class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log(event.target.checkValidity());
        event.preventDefault();
        if(!event.target.checkValidity()) {
            return;
        }
        const data = new FormData(event.target);
        let object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        let dataParsed = JSON.stringify(object);
        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: dataParsed
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
                                  <br/><input type="text" className="form-control" id="pass" name="username" placeholder="Enter username" minLength="5" required/>
                              </label>
                              <br/><label>
                                  Password
                                  <br/><input type="password" className="form-control" id="logPass" name="password" placeholder="Enter password" minLength="8" required/>
                              </label>
                              <br/><button type="submit" className="btn btn-outline-secondary">Submit</button>
                          </div>
                  </form>
          </div>
      );
  }
}