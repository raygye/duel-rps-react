import React, {Component} from 'react';
import img1 from'./imgs/img1.png'
import img2 from'./imgs/img2.png'
import img3 from'./imgs/img3.png'
export default class Signup extends Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get("username"));
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
    handleSelect(event) {
        event.preventDefault();
    }
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
                            <br/><input type="text" id="signUser" name="username" placeholder="Enter username" required/>
                            <br/><small className="text-secondary">Username must be 5+ characters in length</small>
                        </label>
                        <br/><label>
                            Password
                            <br/><input type="password" id="signPass" name="password" placeholder="Enter password" required/>
                            <br/><small className="text-secondary">Password must be 8+ characters in length</small>
                        </label>
                        <br/><input type="image" className="img" name="img1" src={img1} alt="img1" onClick={this.handleSelect}/>
                        <input type="image" className="img" name="img2" src={img2} alt="img2" onClick={this.handleSelect}/>
                        <input type="image" className="img" name="img3" src={img3} alt="img3" onClick={this.handleSelect}/>
                        <br/><button type="submit" className="btn btn-outline-secondary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}