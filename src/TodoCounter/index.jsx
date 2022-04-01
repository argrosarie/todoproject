import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'


const TodoCounter = () => {
   const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
       <div>
        <h1>Welcome to your ToDoApp</h1>
        <h2 className="TodoCounter">You finished {completedTodos} ToDos of {totalTodos}</h2>
        </div>
    )
}

export {TodoCounter} ;