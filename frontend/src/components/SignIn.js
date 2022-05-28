import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';
import { authApi } from '../componentsSvcs/Api.js';

class SignIn extends Component {

    state = {
        Email: "",
        FStatus: "",
        LoggedIn: false,
        LoginButt: "Log In",
        Manage: "",
        MStatus: "Sign in with email:",
        OtherType: "Email",
        Password: "",
        SigninType: "Username:",
        Status: "",
        Title: "Sign In",
        STBool: false,
        Username: ""
    }

    async componentDidMount()
    {
        await this.handleLoggedIn();
    }

    handleLoggedIn = async () => 
    {
        await authApi.post('/loggedin')
        .then(response => 
        {
            if(response.data["status"] === "AUTH")
            {
                this.setState({LoginButt: "Log Out"});
                this.setState({OtherType: ""});
                this.setState({Manage: "Manage Your User Account"});
                this.setState({FStatus: ""});
                this.setState({MStatus: ""});

                if(response.data["respBody"]["first_name"] != null)
                    this.setState({Title: "Welcome, " + response.data["respBody"]["first_name"] + "!"});
                else
                    this.setState({Title: "Welcome!"});
            }
        });
    }

    handleLogin = async event => 
    {
        event.preventDefault();
            
        if(this.state.LoginButt === "Log Out")
        {
            await this.handleLogout();
        }
        else if(this.state.STBool)
        {
            await this.handleUserLogin("email");
        }
        else
        {
            await this.handleUserLogin("user_name");
        }
    }

    handleUserLogin = async (loginType) => 
    {
        const user = {
            user_name: this.state.Username,
            pass_word: this.state.Password,
            email: this.state.Username,
            type: loginType
        };

        await authApi.post('/loginUser', user)
        .then(response =>
        {
            if(response.data["status"] === "AUTH")
            {
                this.setState({Status: ""});
                this.setState({Username: ""});
                this.setState({Password: ""});
                this.setState({Email: ""});
                this.setState({FStatus: ""});
                this.setState({LoggedIn: true});
                this.setState({LoginButt: "Log Out"});
                this.setState({OtherType: ""});
                this.setState({Manage: "Manage Your User Account"});
                this.setState({MStatus: ""});

                if(response.data["respBody"]["first_name"] != null)
                    this.setState({Title: "Welcome, " + response.data["respBody"]["first_name"] + "!"});
                else
                    this.setState({Title: "Welcome!"});
            }
            else
            {
                this.setState({Status: "incorrect username and/or password"});
                this.setState({FStatus: "Forgot Password"});
            }
        })
        .catch(() => {
            this.setState({Status: "An error occurred, please try again later"});
        });
    }

    handleLogout = async () =>
    {
        await authApi.post('/logout')
        .then(() =>
        {
            this.setState({LoginButt: "Log In"});
            this.setState({Title: "Sign In"});
            this.setState({Manage: ""});
            this.setState({SigninType: "Username:"});
            this.setState({OtherType: "Email"});
            this.setState({MStatus: "Sign in with email:"});
            this.setState({STBool: false});
            this.setState({LoggedIn: false});
            this.setState({FStatus: ""});
        })
    }

    handleEmail = event => 
    {
        event.preventDefault();

        if(!(this.state.STBool === true))
        {
            this.setState({SigninType: "Email:"});
            this.setState({OtherType: "Username"});
            this.setState({STBool: true});
        }
        else
        {
            this.setState({SigninType: "Username:"});
            this.setState({OtherType: "Email"});
            this.setState({STBool: false});
        }
    }

    changeUN = event => {
        this.setState({Username: event.target.value});
    }

    changePW = event => {
        this.setState({Password: event.target.value});
    }

    render()
    {
        return(
            <div className="signin-container" id="login">
                <div className="signin-input-box">
                    <h1>{this.state.Title}</h1>
                    <form onSubmit={this.handleLogin}>
                        <table className="signin-form">
                            <tbody>
                                <tr className="signin-list-item">
                                    <td><label>{this.state.SigninType}</label></td>
                                    <td><input 
                                    name='username'
                                    type='text'
                                    value={this.state.Username} 
                                    onChange={this.changeUN} /></td>
                                </tr>
                                <tr className="signin-list-item">
                                    <td><label>Password: </label></td>
                                    <td><input 
                                    name='password'
                                    type='password'
                                    value={this.state.Password}
                                    onChange={this.changePW} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="signin-buttons">
                            <li>
                                <button className="signin-button" type="submit">{this.state.LoginButt}</button>
                                <Link to='/register'><button className="signin-button">Sign Up</button></Link>
                            </li>
                        </ul>
                        <p id="signin-state-msg-final">{this.state.Status}</p>
                        <p>
                            <Link to='/reset' className="signin-reset-link">{this.state.FStatus}</Link>
                        </p>
                    </form>
                    <div className="signin-register-container">
                        <p>
                            {this.state.MStatus}
                            <button className="signin-register-link" onClick={this.handleEmail}>{this.state.OtherType}</button>
                            <Link to='/manage' className="signin-manage-link">{this.state.Manage}</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;