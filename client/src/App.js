import React, { Component, Fragment} from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar'
import NavBarMobile from './NavBar-Mobile'
import Routes from './Routes'
import Footer from './Footer'
import { isMobile } from "react-device-detect"

function App() {

  return (
    <Fragment>
    <BrowserRouter>
    { isMobile ? (<NavBarMobile />) : (<NavBar />)}
    <Route path="/" component={Routes} />
    <Footer/>
    </BrowserRouter>
  </Fragment>
  );
}

export default App;
