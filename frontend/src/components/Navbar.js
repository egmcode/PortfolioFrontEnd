import React, {Component} from "react";
import '../styles/Navbar.css';
import {Link as RSLink} from 'react-scroll';

class Navbar extends Component 
{
    render() 
    {
        return(
            <nav className="navbar-container">
                    <div className="navbar-menu-conatiner">
                        <ul className="navbar-menu">
                            <li className="navbar-item">
                                <RSLink to='home' spy={true} offset={-100} duration={500} className='navbar-links'>
                                    Home
                                </RSLink>
                            </li>
                            <li className="navbar-item">
                                <RSLink to='skills' spy={true} offset={-100} duration={500} className='navbar-links'>
                                    Skills
                                </RSLink>
                            </li>
                            <li className="navbar-item">
                                <RSLink to='experience' spy={true} offset={-100} duration={500} className='navbar-links'>
                                    Experience
                                </RSLink>
                            </li>
                            <li className="navbar-item">
                                <RSLink to='about' spy={true} offset={-100} duration={200} className='navbar-links'>
                                    About
                                </RSLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default Navbar;
