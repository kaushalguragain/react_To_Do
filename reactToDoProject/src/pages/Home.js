import React,{Component} from 'react'
import TodoList from  '../components/TodoList'
import AddForm from  '../components/AddForm'
class Home extends Component {
  state ={
    todos:[
      {id:1, content:"Learn react js"},
      {id:2, content:"watch movie"},
      
    ]
  }


addTodo =(todo) =>
{
  const todos = [...this.state.todos,todo];  //spread operator- works in array and object as well
  this.setState({todos});
}

deleteTodo =(id) =>{

  const todos = this.state.todos.filter(todo => todo.id !== id); //Es6 filter method
  this.setState({todos});
}

render(){
  const{ todos } = this.state;//destructuring objects
  return(
    <div>
      <div className="container">
       <TodoList deleteTodo={this.deleteTodo} todos= {todos} />

       <AddForm  addTodo={this.addTodo} />
       </div>
    </div>
    )
  }
}
export default Home