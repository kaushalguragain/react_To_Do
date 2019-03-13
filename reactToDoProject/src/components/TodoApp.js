import React, { Component } from 'react';
import './TodoApp.css';
import Navbar from './Navbar';
import 'materialize-css/dist/css/materialize.min.css'
import TodoList from "./TodoList"
class TodoApp extends Component {
  state ={
    todos:[
      {id:1, content:"Learn react js"},
      {id:2, content:"watch movie"},
      
    ]
  }
  render() {
    const{ todos } = this.state;
    //destructuring objects
    return (
      <div className="App">
      
       <Navbar />
       <div className="container">
       <TodoList todos= {todos}/>
       </div>
      </div>
    );
  }
}

export default TodoApp;
