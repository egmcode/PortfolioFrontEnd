import React from 'react';
import '../styles/Relevantexp.css';

function Relevantexp({title, body, current, src, alt}) 
{
    return(
        <div className="relexp-container">
            <div className="relexp-items-container">
                <div className="relexp-flexbox-item">
                    <img src={src} alt={alt} />
                </div>
                <div className="relexp-flexbox-item-txt relexp-flexbox-item">
                    <h1>{title}</h1>
                    <p id="current">{current}</p>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default Relevantexp;