import React, { Component } from 'react';
import './TodoApp.css';
import Navbar from './Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route} from 'react-router-dom';
const TodoApp =(props) => {

    return (
      <BrowserRouter>
      <div className="App">
      
           <Navbar />
      
      </div>
      </BrowserRouter>
    );
  }


export default TodoApp;
      

