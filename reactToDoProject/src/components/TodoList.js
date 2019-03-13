import React from 'react'

const TodoList =({todos,deleteTodo}) =>{ //descructuring needs curly barces
  return(
    <div className="collection">
        {todos.length >0 ? todos.map(todo => <p key={todo.id} onClick={(e) =>deleteTodo(todo.id)} className="collection-item">{todo.content}
          
          </p>):<p>List is empty Add new Items</p> }
    </div>
  )
}
export default TodoList