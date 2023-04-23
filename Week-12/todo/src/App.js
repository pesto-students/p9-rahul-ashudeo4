import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/navbar';
import TodoList from './Todo/todo';
import Input from './Input/input';


function App() {
  const [todolist,setTodolist]=useState([
    {
      id:0,
      value:"Buy T-Shirt"
    },
    {
      id:1,
      value:"Get a haircut"
    }
  ]);
  
  const updateOnChange=(value)=>{
    const todoLength = todolist.length;
    const newTodolist = [...todolist, {id:todoLength,value}] 
    setTodolist(newTodolist);
  }

  return (
    <div className="App">
      <Navbar/>
      <TodoList todolist={todolist}/>
      <Input updateOnChange={updateOnChange}/>
    </div>
  );
}

export default App;
