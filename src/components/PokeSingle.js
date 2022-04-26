import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const PokeSingle = () => {
  return (
    <div>POkemon will be here 
        <Link to="/pokesingle">
          single Pokemon will be here
        </Link>
    </div>
  );
};

export default PokeSingle;