import React, {Component} from 'react';
import '../styles/ResetReq.css';
import {Link} from 'react-router-dom';
import { authApi } from '../componentsSvcs/Api.js';

class ResetReq extends Component 
{
    state = {
        Email: "",
        Status: ""
    }

    handleSubmit = async event => 
    {
        event.preventDefault();

        let user = {
            email: this.state.Email
        }

        await authApi.post('/getLink', user)
        .then(response => 
        {
            this.setState({Email: ""});

            if(response.data["status"] === "link sent")
                this.setState({Status: "Link Sent to Email"});
            else
                this.setState({Status: "Error Sending Reset Link to Specified Email"});
        })
        .catch(() => {
            this.setState({Status: "Error Sending Reset Link to Specified Email"});
        });
    }

    changeEmail = event =>
    {
        event.preventDefault();
        this.setState({Email: event.target.value});
    }

    render()
    {
        return(
            <div className="resetreq-container">
                <div className="resetreq-input-box">
                    <h1>Request Password Reset</h1>
                    <form onSubmit={this.handleSubmit}>
                        <table className="resetreq-form">
                            <tbody>
                                <tr className="resetreq-list-item">
                                    <td><label>Email: </label></td>
                                    <td><input
                                    name='email'
                                    type='email'
                                    value={this.Email}
                                    onChange={this.changeEmail}
                                    required /></td>
                                </tr>
                            </tbody>
                        </table>
                        <ul className="resetreq-buttons">
                            <li>
                                <Link to='/'><button className="resetreq-button">Home</button></Link>
                                <button type="submit" className="resetreq-button">Send Link</button>
                            </li>
                        </ul>
                    </form>
                    <p id="resetreq-state-msg">{this.state.Status}</p>
                </div>
            </div>
        )
    }
}

export default ResetReq;