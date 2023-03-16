import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Container from "react-bootstrap/esm/Container";
import FooterCustom from './components/labcustom';
import 'react-router-dom'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Fooldal from './components/fo';
import Navbar from './components/navi';
import bemutat from './components/bemutat';
import Kapcsolat from './components/kapcsolat';



 class App extends React.Component {
  render() {
    return <div>
       <Navbar/>
        <Routes>
          <Route path='/'  element={<Fooldal/>} />
          <Route path='bemutatkozas' element={<bemutat/>}  />
          <Route path='kapcsolat' element={<Kapcsolat/>}  />
        </Routes>
      
        <FooterCustom/>
    </div>
  }
 }

export default App;
