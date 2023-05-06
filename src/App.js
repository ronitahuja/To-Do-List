import { useState } from 'react';
import './App.css';
import { Task } from "./Task";

function App() {
  const [toDoList,setToDoList]=useState([]);
  const [newTask,setNewTask]=useState("");

  function handleChange(event){
    setNewTask(event.target.value);
  }

  function addToList(){
    const task={
      id:toDoList.length===0 ?1 :toDoList[toDoList.length-1].id+1,
      taskName:newTask,
    };
    const newtodolist=[...toDoList,task];
    setToDoList(newtodolist);
  }

  function deleteTask(taskObj){
    const newToDoList=toDoList.filter((task)=>{
      if(task.id===taskObj.id)return false;
      return true;
    })
    setToDoList(newToDoList);
  }

  return (
    <div className="App">
      <h1>Complete your tasks regularly</h1>
      <div className="addTask">
        <input className='task' onChange={handleChange}/>
        <button onClick={addToList}>Add Task</button>
      </div>
      <div className='list'>{
        toDoList.map((task)=>{
          return(
            <Task taskObj={task} deleteTask={deleteTask} taskName={task.taskName}/>
            )
        })
      }</div>
    </div>
  );
}

export default App;
