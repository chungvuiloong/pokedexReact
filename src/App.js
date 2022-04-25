import './App.css';
import React from 'react';
import Layout from './pages/Layout';
import {BrowserRouter as BRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BRouter>
        <Layout/> 
      </BRouter>
    </div>
  );
};

export default App;
