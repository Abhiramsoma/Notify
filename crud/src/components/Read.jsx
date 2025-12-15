import React from 'react'
import { toast } from 'react-toastify';
const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const DeleteHandler = (id) => {
      const filtertodo = todos.filter((todo)=> todo.id != id);
      settodos(filtertodo)
      toast.error("Todo Deleted!");

    };

    const rendertodos = todos.map((todo) => {
        return (
         <li key={todo.id} className="mb-2 flex justify-between items-center p-4 bg-gray-900 rounded">
         <span className="text-xl font-thin">
          {todo.title}| 
          <button className="button-thin text-red-500 text-sm" onClick={() => DeleteHandler(todo.id)}>Delete</button></span>  
        </li>        
        );    
    });
   
     return (
        <div className="w-[40%] p-10 ">
            <h1 className="mb-10 text-5xl font-thin">
                <span className="text-pink-400">Pending </span>Todos</h1>
            <ol>{rendertodos}</ol>        
        </div>
    );
};
    
export default Read












/*
import React from 'react'

const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const DeleteHandler = (id) => {
        const filtertodo = todos.filter((todo) => todo.id != id);    
        settodos(filtertodo);
    };
    const rendertodos = todos.map((todo) => {
        return (
         <li key={todo.id} className="mb-2 flex justify-between item-center p-4 bg-gray-900 rounded">
         <span className="text-xl font-thin">{todo.title}</span>  
         <button className="text-sm font-thin text-red-400" onClick={() => DeleteHandler(todo.id)}>Delete</button>
        </li>        
        );
    
    });
   
     return (
        <div className="w-[40%] p-10">
            <h1 className="mb-10 text-5xl font-thin">
                <span className="text-pink-400">Pending </span>Todos</h1>
            <ol>{rendertodos}</ol>        
        </div>
    );
};
    
export default Read
*/