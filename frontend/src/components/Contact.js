import React, {Component} from 'react';
import '../styles/Contact.css';
import Simplenav from './Simplenav';
import Simplefooter from './Simplefooter';
import {Link} from 'react-router-dom';
import { authApi, svcApi } from '../componentsSvcs/Api.js';

class Contact extends Component 
{
    state = {
        EmailAdd: "",
        EmailMsg: "",
        StateEmailSent: "",
        StateMsg: "",
        StateMsgSent: "",
        TempEmail: "",
        TempMsg: ""
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
                if(response.data["respBody"]["email"] != null)
                    this.setState({EmailAdd: response.data["respBody"]["email"]});
            }
        });
    }

    handleEmail = async event => {
        event.preventDefault();
    
        const reqEmail = {
          EmailAdd: this.state.EmailAdd,
          EmailMsg: this.state.EmailMsg
        };
    
        await svcApi.post('/Contact', reqEmail)
        .then(() => {
              this.setState({EmailAdd:""});
              this.setState({EmailMsg: ""});
              this.setState({StateMsg:"Thank you for contacting me, I will reach out to you shortly!\n\n"});
              this.setState({StateEmailSent: "Your Email: " + this.state.TempEmail});
              this.setState({StateMsgSent:"Your Message: " + this.state.TempMsg});
        })
        .catch(() => {
            this.setState({StateMsg: "An Error was encountered when trying to contact me.  Please use the email or phone number above. I'm sorry for the inconvenience!"})
        });
      }
    
    changeEmail = event => {
        this.setState({EmailAdd: event.target.value});
        this.setState({TempEmail: event.target.value});
    }

    changeMessage = event => {
        this.setState({EmailMsg: event.target.value});
        this.setState({TempMsg: event.target.value});
    }

    render()
    {
        return(
            <div className='contact-page'>
                <Simplenav />
                <div className="contact-container">
                    <div className="contact-img contact-flexbox-item">
                        <img src='email3.jpg' alt='email'/>
                    </div>
                    <div className="contact-flexbox-item">
                        <ul className="contact-input-container">
                            <form onSubmit={this.handleEmail}>
                                <li>
                                    <label id="label-text">Your Email:</label>
                                    <input
                                    className='footer-input'
                                    name='email'
                                    type='email'
                                    value={this.state.EmailAdd}
                                    onChange={this.changeEmail}
                                    />
                                </li>
                                <li>
                                    <label id="label-text">Your Message:</label>
                                    <textarea
                                    className='footer-input large-input'
                                    name='message'
                                    type='text'
                                    value={this.state.EmailMsg}
                                    onChange={this.changeMessage}
                                    />
                                </li>
                                <li>
                                    <button className="contact-button" type="submit">Contact Me</button>
                                    <Link to='/' className="home-link"><button className="home-button">Home</button></Link>
                                </li>
                            </form>
                        </ul>
                    </div>
                    <div></div>
                    <div>
                        <p className="contact-resp">{this.state.StateMsg}</p><br />
                        <p className="contact-resp-msg">{this.state.StateEmailSent}</p>
                        <p className="contact-resp-msg">{this.state.StateMsgSent}</p>
                    </div>
                </div>
                <Simplefooter />
            </div>
        )
    }
}

export default Contact;
