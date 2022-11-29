import React from 'react'

function Todo(props) {
  return (
    <div className={`todoItem ${props.done === 'yes' ? "completed" : "incompleted"}`}>
        <div className="title">{props.title}</div>
        <div className="checkbox">
            <input type="checkbox"></input>
        </div>
    </div>
  )
}

export default Todo