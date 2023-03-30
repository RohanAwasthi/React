
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './footer'; 
import { useState } from "react"
import Tasks from './Tasks';
import AddTask from './AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);


const [tasks, setTasks] = useState([

  {
      id:1,
      text: 'Yoga ',
      day: '30 March 2023 at 6:00 AM',
      reminder: true
  },
  {
      id:2,
      text: 'Meditation',
      day: '30 March 2023 at 7:30 AM',
      reminder: true
  },
  {
      id:3,
      text: 'Breakfast',
      day: '30 March 2023 at 8:30 AM',
      reminder: false
  },
  {
      id:4,
      text: 'Training',
      day: '30 March 2023 at 9:00 AM',
      reminder: true
  }

])



const deleteTask = (id) => {
  
    setTasks(tasks.filter((task) => task.id !== id))
}

const taskReminder=(id) => {
console.log(id);


}
const onTaskReminder=(id) =>{
  setTasks(
    tasks.map((task)=> task.id===id?{...task,reminder:!task.reminder}:task)
  )
}  

const addTask = (task) => {
  const id = Math.floor(Math.random()*10000+1);
  console.log(id);

  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

return (
  <div className="container">
    <Header onAdd={ () => setShowAddTask(!showAddTask)}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? 
    <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      onReminder={onTaskReminder}
     />
    : 'No Tasks Available for Today'}
  </div>
 
  );
  }

export default App;
