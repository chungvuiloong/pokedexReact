import React from 'react';
import PokeCard from './PokeCard';
import {Link, Outlet} from 'react-router-dom';

const PokeList = () => {
    return (
    <div>
        Pokelist is here.
        <PokeCard />

        {/* <Link to ="/pokesingle">Some cool link</Link>
        <Outlet/> */}
    </div>
      
    );
}
 
export default PokeList;