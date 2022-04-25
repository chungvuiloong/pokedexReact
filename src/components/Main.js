import React from 'react';
import About from './About';
import Home from './Home';
import FavList from './FavList';
import PokeList from './PokeList';
import PokeSingle from './PokeSingle';
import {Routes, Route} from 'react-router-dom';

const Main = () => {
    return ( 
    <main>
        <Routes>
            <Route path="/"         element={<Home/>}/>
            <Route path="/favlist"  element={<FavList/>}/>
            <Route path="/pokelist" element={<PokeList/>}> 
                <Route path=":pokesingleId" element={<PokeSingle/>}/>
            </Route>
            <Route path="/about"    element={<About/>}/>

        </Routes>
       
    </main> 
    );
}
 
export default Main;