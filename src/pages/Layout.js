import React from 'react';

import Header from '../components/Header';
// import Header from './src/components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Layout = () => {
    return (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>  
    );
};
 
export default Layout;