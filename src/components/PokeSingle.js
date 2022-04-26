import React from 'react';
import {useParams} from 'react-router-dom';

const PokeSingle = () => {
  let params = useParams();
  console.log(params);
  return (
    <div>
          <h3>{params.name}</h3>
    </div>
  );
};

export default PokeSingle;