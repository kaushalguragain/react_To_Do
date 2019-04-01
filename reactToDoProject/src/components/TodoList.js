import React from 'react'
import { Link } from 'react-router-dom'

const TodoList =({todos,deleteTodo}) =>{ //descructuring needs curly barces
  return(
    <div className="collection">
        {todos.length >0 ? todos.map(todo => <p key={todo.id} onClick={(e) =>deleteTodo(todo.id)} className="collection-item">{todo.content}
        <Link to={'/todo/' + todo.id}> 
        <a className="waves-effect vabes-light btn">
          View
        </a>
        </Link>
          </p>)
          :<p>List is empty Add new Items</p> }
    </div>
  )
}
export default TodoList