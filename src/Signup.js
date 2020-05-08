import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import img1 from'./imgs/img1.png'
import img2 from'./imgs/img2.png'
import img3 from'./imgs/img3.png'
export default class Signup extends Component{
    state = {
        selected: 0,
    };
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sel1 = this.sel1.bind(this);
        this.sel2 = this.sel2.bind(this);
        this.sel3 = this.sel3.bind(this);
    }
    handleSubmit(event) {
        const cookies = new Cookies();
        event.preventDefault();
        if(!event.target.checkValidity()) {
            return;
        }
        else if(this.img === 0) {
            alert('Please select a character');
            return;
        }
        const data = new FormData(event.target);
        let object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        object["img"] = this.state.selected;
        let dataParsed = JSON.stringify(object);
        fetch(cookies.get("endpoint") + 'users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: dataParsed
        }).then(
            (response) => {
                response.text().then((data) => {
                    if (data.includes('Username already exists.')) {
                        alert('Username already exists.');
                    }
                    else {
                        alert('Success!');
                    }
                });
            })
    }
    sel1(event) {
        event.preventDefault();
        this.setState({selected: 1});
    }
    sel2(event) {
        event.preventDefault();
        this.setState({selected: 2});
    }
    sel3(event) {
        event.preventDefault();
        this.setState({selected: 3});
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
                            <br/><input type="text" className="form-control" id="signUser" name="username" placeholder="Enter username" minLength="5" required/>
                            <small className="text-secondary">Username must be 5+ characters in length</small>
                        </label>
                        <br/><label>
                            Password
                            <br/><input type="password" className="form-control" id="signPass" name="password" placeholder="Enter password" minLength="8" required/>
                            <small className="text-secondary">Password must be 8+ characters in length</small>
                        </label>
                        <label>
                            Select a Character
                            <br/><input type="image" className={`${this.state.selected!==1 ? "" : "border border-primary"}`} name="img1" src={img1} alt="img1" onClick={this.sel1}/>
                            <input type="image" className={`${this.state.selected!==2 ? "" : "border border-primary"}`} name="img2" src={img2} alt="img2" onClick={this.sel2}/>
                            <input type="image" className={`${this.state.selected!==3 ? "" : "border border-primary"}`} name="img3" src={img3} alt="img3" onClick={this.sel3}/>
                        </label>
                        <br/><button type="submit" className="btn btn-outline-secondary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}