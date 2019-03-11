import React, { Component } from 'react';
import './TodoApp.css';
import Navbar from './Navbar';
import 'materialize-css/dist/css/materialize.min.css'
class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
       <Navbar />
      </div>
    );
  }
}

export default TodoApp;
