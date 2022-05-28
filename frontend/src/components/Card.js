import React from 'react';
import '../styles/Card.css';

function Card({src, body, title, list}) {

    return(
        <>
            <li className="card-container">
                <div className="card-item-container">
                    <div className="card-pic-container">
                        <img className="card-pic-item" 
                            src={src}
                            alt={title}
                        />
                    </div>
                    <div className="card-info-container">
                        <h5 className="card-info-item">{body}</h5>
                        <div className="card-info-list card-info-item">
                            <ul className="card-info-item">
                                {list.map(listItem =>
                                <li className="card-info-list-item" key={listItem}>{listItem}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Card;