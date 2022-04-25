import React from 'react';
import About from './About';
import Home from './Home';
import FavList from './FavList';
import PokeList from './PokeList';

const Main = () => {
    return ( 
    <main>
        <Home />
        <FavList/>
        <PokeList/>
        <About />

    </main> 
    );
}
 
export default Main;