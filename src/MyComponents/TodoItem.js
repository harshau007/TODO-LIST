import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="container text-center  py-2 shadow mb-4 bg-white card">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger font-weight-bold pt-2" onClick={() => onDelete(todo)}><h6>Done</h6></button>
        </div>
    )
}
