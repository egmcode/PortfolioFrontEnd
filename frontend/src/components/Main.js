import React, { Component } from 'react';
import '../styles/Main.css';
import {Link as RRDLink} from 'react-router-dom';

class Main extends Component 
{
    render() {
        return(
            <div className="main-container" id="home">
                <div className="main-body-container">
                    <h1>EGMCode</h1>
                    <p className="main-body-quote">Working Hard and Serving Others</p>
                    <div className="main-buttons-container">
                        <ul className="main-list">
                            <li className="main-list-item">
                                <RRDLink to='/contact' className='main-link contact-page-link'>
                                    Contact
                                </RRDLink>
                            </li>
                            <li className="main-list-item">
                                <a className="main-link github-link" href="https://github.com/egmcode">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Main;
