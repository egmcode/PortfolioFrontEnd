import React, {Component} from 'react';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';
import { svcApi } from '../componentsSvcs/Api.js';

class Footer extends Component 
{
  state = {
    EmailAdd: "",
    EmailStatus: "",
    TempEmail: ""
  }

  handleEmail = async event => 
  {
    event.preventDefault();

    const reqEmail = {
      EmailAdd: this.state.EmailAdd,
      EmailMsg: ""
    };

    await svcApi.post('/Resume', reqEmail)
    .then(() => {
      this.setState({EmailAdd:""});
      this.setState({EmailStatus:"Thank you for your interest! My Resume and Cover Letter were sent to: " + this.state.TempEmail});
    })
    .catch(() => {
      this.setState({EmailStatus:"An Error was encountered when trying to send my Resume and Cover Letter.  Please contact me for these items. I'm sorry for the inconvenience!"})
    })
  }

  changeEmail = event => {
    this.setState({EmailAdd: event.target.value});
    this.setState({TempEmail: event.target.value});
  }

  render() 
  {
    return (
      <>
      <div className='footer-container'>
        <div className='thankyou-container'>
          <p className='thankyou-text'>
            Thank you for taking the time to learn a little about me.
          </p>
          <p className='email-text'>
            Please submit your email to get my full Resume and Cover Letter
          </p>
          <div className='input-areas'>
            <form onSubmit={this.handleEmail}>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
                value={this.state.EmailAdd}
                onChange={this.changeEmail}
                required
              />
              <button className="email-button" type="submit">Email Me</button>
            </form>
            <p className="email-status">{this.state.EmailStatus}</p>
          </div>
          <div className="questions-container">
            <p className="questions-text">If you have any questions or would like to speak further, please go to my <Link to='/contact' className="footer-link">contact page</Link></p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Footer;