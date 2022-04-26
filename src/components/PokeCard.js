import React from 'react';
import {Link} from 'react-router-dom';

const PokeCards = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name}/>
            <h3>Name {props.name}</h3>
            <Link to ={props.name}>See more</Link>
        </div>

    );
};

export default PokeCards;