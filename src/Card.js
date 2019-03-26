import React from 'react';
import PropTypes from 'prop-types';
import './css/Card.css'

const Card = ({property}) => {
    const {index, picture, name, quote,number, appearances, goals, assists} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture}  />
            <div className="details">
                {/* <span className="index">{index+1}</span> */}
               
                  <h3> {number} {name}</h3>
                   <p> {quote}</p>
                
                <ul className="features">
                    <li>{appearances} <span>Appearances</span></li>
                    <li>{goals} <span>Goals</span></li>
                    <li>{assists} <span>Assists</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}
export default Card;