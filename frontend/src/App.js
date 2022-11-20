import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactUs from './ContactUs';
import Search from './Search';
import Login from './login';
import { Route,Routes,Router } from 'react-router-dom';
import Head from './Head';
import Initiate from './Initiate';

function App() {
return (
    <>
      <Head/>
      <Routes>
        <Route path="/login" element={ <Login/>} />
        <Route path="/Contactus" element={<ContactUs/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/initiateproperty" element={<Initiate />} />
      </Routes>

     
      
      
    </>
);
}

export default App;