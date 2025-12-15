import React from 'react'
import { nanoid } from "nanoid"
import {useForm} from "react-hook-form"
import { toast } from 'react-toastify'
const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    toast.success("Todo created!");
    reset();

    

  };

  return (
    <div className=" w-[60%] p-10 text-center">
        <h1 className="text-5xl font-thin">Set <span className="text-red-400">Reminder </span>for Tasks</h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>

        <input 
        {...register("title", {
          required: "title cannot be empty",
        })} 
        className="border-b w-full text-2xl font-thin p-2 outline-0"
              type="text" 
        placeholder="title"
        />
        {errors && errors.title && errors.title.message&&<small className="font-thin text-red-500">
        {errors.title.message}</small>}

        <br/>
        <br/>

        <button className="text-xl px-10 py-2 border rounded mt-5">Create Todo</button>
      </form>
    
    </div>
  )
}

export default Create

























/*
import React, {useState} from 'react'
import { nanoid } from "nanoid";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const [title,settitle] = useState("");


    const SubmitHandler = (e) => {
        e.preventDefault();
  
        const newtodo = {
          id: nanoid(), 
          title: title,
          isCompleted: true,
        };


        let copytodos = [...todos];
        copytodos.push(newtodo);
        settodos(copytodos);
  
        settitle("");
  
      
    };
    return (
        <div className="border w-[60%] p-10 ">
            <h1 className="text-5xl font-thin">Set <span className="text-red-400">Reminder</span> for tasks</h1>
            <form onSubmit={SubmitHandler}>
    
              <input 
              className="p-2 border-b w-full text-2xl font-thin outline-0"
              onChange={(e) => settitle(e.target.value)}
              value={title}
              type="text" placeholder="title"/>
              <br/>
              <br/>
              
              <button className="mt-5 text-xl px-10 py-2 border rounded" >Create Todo</button>
            </form>
    
          
        </div>
    );
};
        

export default Create
*/