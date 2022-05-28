import React, {Component} from 'react';
import '../styles/Simplenav.css';

class Simplenav extends Component {
    render()
    {
        return(
            <nav className="simple-navbar-container">
                    <div className="simple-navbar-menu-conatiner">
                        <ul className="simple-navbar-menu">
                            <li className="simple-navbar-item">
                                <p className="simple-navbar-info">EMAIL: murphy.elizabeth351@gmail.com </p>
                            </li>
                            <li className="simple-navbar-item">
                                <p className="simple-navbar-info"> PHONE: 262.366.9167 </p>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default Simplenav;