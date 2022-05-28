import React from 'react';
import '../styles/Otherexp.css';

function Otherexp ({title, body, current, src, alt}) {
    return(
        <div className="othexp-container">
            <div className="othexp-items-container">
                <div className="othexp-flexbox-item">
                    <img src={src} alt={alt} />
                </div>
                <div className="othexp-flexbox-item-txt othexp-flexbox-item">
                    <h1>{title}</h1>
                    <p id="current">{current}</p>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Otherexp;