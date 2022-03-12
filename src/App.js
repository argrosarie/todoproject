import React from 'react';
// import './App.css';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import TodoList from './TodoList';


const todos = [
  {text : 'Cortar la cebolla', completed: true},
  {text : 'Estudiar', completed: false},
  {text : 'Limpiar ropero', completed: false},
];  

function App() {
  return (
    <React.Fragment>
       <TodoCounter /> 
         <TodoSearch />  
       
       <TodoList> 
         {todos.map(todo => (<TodoItem key={todo.text} text={todo.text}
         completed={todo.completed} />)  )} 
        </TodoList> 
        <CreateTodoButton />
        
    </React.Fragment>
  );
}

export default App;
