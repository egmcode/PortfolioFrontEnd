import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';
import { authApi } from '../componentsSvcs/Api.js';
import { checkPW } from '../componentsSvcs/Password.js';

class Register extends Component 
{
    state = {
        Email: "",
        FirstName: "",
        LastName: "",
        Password: "",
        PStatusBool: false,
        PLStatusBool: false,
        Status: "",
        Username: "",
        VerPassword: ""
    }

    handleUsername = async event => 
    {
        event.preventDefault();

        const user = {
            user_name: this.state.Username,
            pass_word: this.state.Password,
            first_name: this.state.FirstName,
            last_name: this.state.LastName,
            email: this.state.Email
        };

        if((this.state.PStatusBool === true))
        {
            await authApi.post('/newUser', user)
            .then(response => 
            {
                if(response.data["status"] === "error")
                {
                    this.setState({Status: "error creating user"});
                }
                else if(response.data["status"] === "successful")
                {
                    this.setState({Username: ""});
                    this.setState({Password: ""});
                    this.setState({VerPassword: ""});
                    this.setState({FirstName: ""});
                    this.setState({LastName: ""});
                    this.setState({Email: ""});
                    this.setState({Status: "Registration Successful"});
                }
                else
                {
                    this.setState({Status: response.data["status"]})
                }
            })
            .catch(() => {
                this.setState({Status: "Error Registering User"});
            });
        }
    }

    changeUN = event => {
        this.setState({Username: event.target.value});
    }

    changePW = event => 
    {
        this.setState({Password: event.target.value});
        let passResp = checkPW(event.target.value, this.state.VerPassword)

        this.setState({Status: passResp["status"]});
        this.setState({PStatusBool: passResp["valid"]});
    }

    changeVPW = event =>
    {
        this.setState({VerPassword: event.target.value})
        let passResp = checkPW(event.target.value, this.state.Password)

        this.setState({Status: passResp["status"]})
        this.setState({PStatusBool: passResp["valid"]})
    }

    changeFN = event => {
        this.setState({FirstName: event.target.value});
    }

    changeLN = event => {
        this.setState({LastName: event.target.value});
    }

    changeEmail = event => {
        this.setState({Email: event.target.value});
    }

    render()
    {
        return(
            <div className="register-container">
                <div className="register-input-box">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleUsername}>
                        <table className="register-form">
                            <tbody>
                                <tr className="register-list-item">
                                    <td><label>Username* </label></td>
                                    <td><input 
                                    name='username'
                                    type='text'
                                    value={this.state.Username}
                                    onChange={this.changeUN} 
                                    required /></td>
                                </tr>
                                <tr className="register-list-item">
                                    <td><label>Password*</label></td>
                                    <td><input 
                                    name='password'
                                    type='password'
                                    value={this.state.Password}
                                    onChange={this.changePW} 
                                    required /></td>
                                </tr>
                                <tr className="register-list-item">
                                    <td><label>Confirm*</label></td>
                                    <td><input 
                                    name='password'
                                    type='password'
                                    value={this.state.VerPassword}
                                    onChange={this.changeVPW} 
                                    required /></td>
                                </tr>
                                <tr className="register-list-item">
                                    <td><label>First Name*</label></td>
                                    <td><input 
                                    name='firstname'
                                    type='text'
                                    value={this.state.FirstName}
                                    onChange={this.changeFN} 
                                    required /></td>
                                </tr>
                                <tr className="register-list-item">
                                    <td><label>Last Name</label></td>
                                    <td><input 
                                    name='lastname'
                                    type='text'
                                    value={this.state.LastName}
                                    onChange={this.changeLN}/></td>
                                </tr>
                                <tr className="register-list-item">
                                    <td><label>Email*</label></td>
                                    <td><input 
                                    name='email'
                                    type='email'
                                    value={this.state.Email}
                                    onChange={this.changeEmail} 
                                    required /></td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="register-buttons">
                            <li>
                                <Link to='/'><button className="register-button">Home</button></Link>
                                <button className="register-button" type="submit">Register</button>
                            </li>
                        </ul>
                        <p id="register-state-msg-final">{this.state.Status}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;