import React from 'react'
import {TodoItem} from './TodoItem';
import './Todos.css';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "50vh"
    }
    return (
        <div className="container my-5 AfterDel" style={myStyle}>
            {props.todos.length === 0 ? <h2 className="text-white font-weight-bold">Nothing to display</h2>:
                props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>
                } )
            }

        </div>
    )
}

