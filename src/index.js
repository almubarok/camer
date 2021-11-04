import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './UseEffect';
// import Todo from './todo';
import Pokemon from './Pokemon';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


// Navbar
// import Navbar from './components/Navbar';

// // Pages
// import Home from './pages/index';
// import Contact from './pages/contacts';
// import ContactMe from './pages/contactme';
// import Blog from './pages/blog';
// import NotFound from './pages/notfound';
// import Redirect from './pages/redirect';
// import Hook from './pages/hook';


import Routing from './routing';


ReactDOM.render(
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>


  // <React.StrictMode>
    // <App />
    // <Todo/>
    // <Pokemon/>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
