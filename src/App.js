import './App.css';
import React from 'react';
import Layout from './pages/Layout'
import About from './components/About';
import Home from './components/Home';
import FavList from './components/FavList';
import PokeList from './components/PokeList';
import PokeSingle from './components/PokeSingle';

import {BrowserRouter as BRouter, Routes as SwitchR, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BRouter>
        <SwitchR>
            <Route path="/"         element={<Layout/>}>
              <Route index        element={<Home/>}/>
              <Route path="/favlist"  element={<FavList/>}/>
              <Route path="/pokelist" element={<PokeList/>}> 
                <Route path="/pokelist/pokesingle" element={<PokeSingle/>}/>
              </Route>
              <Route path="/about"    element={<About/>}/>
            </Route>
        </SwitchR>
      </BRouter>
    </div>
  );
};

export default App;
