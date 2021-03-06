import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        const cookies = new Cookies();
        event.preventDefault();
        if (!event.target.checkValidity()) {
            return;
        }
        const data = new FormData(event.target);
        let object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        let dataParsed = JSON.stringify(object);
        fetch(cookies.get("endpoint") + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: dataParsed
        }).then(
            (response) => {
                response.json().then((data) => {
                    if (data.authenticated) {
                        const cookies = new Cookies();
                        cookies.set('logged', true, {path: '/'});
                        cookies.set('username', object.username, {path: '/'});
                        cookies.set('img', data.img, {path: '/'});
                        cookies.set('wins', data.wins, {path: '/'});
                        cookies.set('games', data.games, {path: '/'});
                        let url = '/' + cookies.get("username");
                        this.props.history.push(url);
                    } else {
                        alert(data);
                    }
                });
            });
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
export default withRouter(Login);