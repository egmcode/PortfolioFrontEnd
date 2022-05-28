import React from 'react';
import '../styles/Exptitle.css';

function Exptitle({title}) {
    return(
            <div className="exptitle-container">
                <h1>{title}</h1>
            </div>
    )
}

export default Exptitle;