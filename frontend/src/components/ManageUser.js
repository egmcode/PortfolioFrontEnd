import React, {Component} from 'react';
import '../styles/ManageUser.css';
import {Link} from 'react-router-dom';
import { authApi } from '../componentsSvcs/Api.js';
import { checkPW } from '../componentsSvcs/Password.js';

class ManageUser extends Component {

    state = {
        FirstName: "",
        Email: "",
        EStatus: "",
        LastName: "",
        Password: "",
        PStatus: "",
        PStatusBool: false,
        Status: "",
        Username: "",
        VerPassword: ""
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
                this.setState({Username: response.data["respBody"]["user_name"]});
                this.setState({FirstName: response.data["respBody"]["first_name"]});
                this.setState({LastName: response.data["respBody"]["last_name"]});
                this.setState({Email: response.data["respBody"]["email"]});
            }
            else
            {
                this.setState({Status: "Please Log In Again"});
            }
        })
        .catch(() => {
            this.setState({Status: "Please Log In Again"})
        });
    }

    async handleUpdate(event, itemParam)
    {
        event.preventDefault();

        let valueParam = "";
        let valueBool = false;
        let passBool = true;
        let itemVal = "";

        if(itemParam === "email") 
        {
            valueParam = this.state.Email;
            itemVal = "Email";
        }
        else if(itemParam === "pass_word")
        {
            valueParam = this.state.Password;
            itemVal = "Password";

            if(!this.state.PStatusBool)
            {
                passBool = false;
                this.setState({Status: "Password doesn't meet requirements"});
            }
        }
        else
        {
            valueParam = this.state.FirstName;
            itemVal = "First Name";
        }

        if(!(valueParam === "" || valueParam === null))
            valueBool = true;
        else
            this.setState({Status: "Cannot Update An Empty Field"});

        if(valueBool && passBool)
        {
            let updatedItem = {
                item: itemParam,
                value: valueParam,
                user_name: this.state.Username,
                type: "normal"
            };

            authApi.post('/updateUser', updatedItem)
            .then(response => 
            {
                if(response.data["status"] === "successful")
                    this.setState({Status: itemVal + " Update Successful"});
                else if(response.data["status"] === "duplicate email")
                    this.setState({Status: "Duplicate Email"});
                else
                    this.setState({Status: "Error Updating " + itemVal});
            })
            .catch(() => {
                this.setState({Status: "Error Updating " + itemVal});
            });
        }
    }

    deleteUser = async event =>
    {
        event.preventDefault();

        let delUser = {
            user_name: this.state.Username
        };

        authApi.post('/delete', delUser)
        .then(response => 
        {
            if(response.data["status"] === "successful")  
                this.setState({Status: "User Deleted Successfully!"});
            else if(response.data["status"] === "NOAUTH")
                this.setState({Status: "Please log in again"})
            else
                this.setState({Status: "Error Deleting user"});
        })
        .catch(() => {
            this.setState({Status: "Error Deleting user"});
        });
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

    changeFN = event =>
    {
        this.setState({FirstName: event.target.value})
    }

    changeEmail = event =>
    {
        this.setState({Email: event.target.value})
    }

    render()
    {
        return(
            <div className="manageuser-container">
                <div className="manageuser-input-box">
                    <h1>Manage User</h1>
                    <form onSubmit={this.deleteUser}>
                        <table className="manageuser-form">
                            <tbody>
                                <tr className="manageuser-list-item">
                                    <td><label id="manageuser-label">Username </label></td>
                                    <td><input 
                                    className="manageuser-username-input"
                                    name='username'
                                    type='text'
                                    value={this.state.Username}
                                    readOnly
                                    required /></td>
                                </tr>
                                <tr className="manageuser-list-item">
                                    <td><label id="manageuser-label">New Password</label></td>
                                    <td><input 
                                    name='password'
                                    type='password'
                                    value={this.state.Password}
                                    onChange={this.changePW}/></td>
                                </tr>
                                <tr className="manageuser-list-item">
                                    <td><label id="manageuser-label">Confirm</label></td>
                                    <td><input 
                                    name='password'
                                    type='password'
                                    value={this.state.VerPassword}
                                    onChange={this.changeVPW}/></td>
                                    <td className="manageuser-update-item">
                                        <button onClick={(e) => {this.handleUpdate(e, "pass_word")}}>update</button>
                                    </td>
                                </tr>
                                <tr className="manageuser-list-item">
                                    <td><label id="manageuser-label">First Name</label></td>
                                    <td><input 
                                    name='firstname'
                                    type='text'
                                    value={this.state.FirstName}
                                    onChange={this.changeFN}/></td>
                                    <td className="manageuser-update-item">
                                        <button onClick={(e) => {this.handleUpdate(e, "first_name")}}>update</button>
                                    </td>
                                </tr>
                                <tr className="manageuser-list-item">
                                    <td><label id="manageuser-label">Email</label></td>
                                    <td><input 
                                    name='email'
                                    type='email'
                                    value={this.state.Email}
                                    onChange={this.changeEmail}/></td>
                                    <td className="manageuser-update-item">
                                        <button onClick={(e) => {this.handleUpdate(e, "email")}}>update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="manageuser-buttons">
                            <li>
                                <Link to='/'><button className="manageuser-button">Home</button></Link>
                                <button className="manageuser-button" type="submit">Delete</button>
                            </li>
                        </ul>
                        <p id="manageuser-state-msg-final">{this.state.Status}</p>
                    </form>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default ManageUser;