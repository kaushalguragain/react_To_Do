import React from 'react'

const TodoList =({todos}) =>{ //descructuring needs curly barces
  return(
    <div className="collection">
        {todos.map(todo => <p key={todo.id} className="collection-item">{todo.content}
          
          </p>)}
    </div>
  )
}
export default TodoList