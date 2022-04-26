import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const PokeList = () => {
    return (
    <div>
        Pokelist

        <Link to ="/pokesingle">Some cool link</Link>
        <Outlet/>
    </div>
      
    );
}
 
export default PokeList;