import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {

  const [todos, settodos] = useState([
      {id: 1, title:"Kaam karle" , isCompleted:false },

    ]);


    return (

      <div className="text-white w-screen h-screen bg-gray-700 flex p-10">
        <Create todos={todos} settodos={settodos}/>
        <Read todos={todos} settodos={settodos}/>

      </div>
    ); 
};

export default App;

/*
import './App.css'; // or './App.css'
import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
    const [todos, settodos] = useState([
      {id: 1, title:"Kaam karle" , isCompleted:false },

    ]);


    return (
      <div className="text-white flex w-screen h-screen bg-gray-800 p-10">
        <Create todos={todos} settodos={settodos}/>
        <Read todos={todos} settodos={settodos}/>

      </div>
    ); 
};

export default App;
*/