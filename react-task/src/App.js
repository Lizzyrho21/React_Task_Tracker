import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"



function App() {
  const [tasks, setTasks] = useState( [
    { id: 1, posts: 'Hey all, first post!!', feeling:'happy!', active:true,},
    { id: 2, posts: 'Hey all, second post.', feeling:'sad', active:true,},
    { id: 3, posts: 'Hey all, third  post??', feeling:'confused', active:false,},
  
  ])

  // delete task
const deleteTask = (id) => {
  // NOTE:  The ID for a specific task is important for basic functionality.
  // console.log('delete', id);
  //UseEffect here. This is how you cahnge state (state is immutable otherwise)
  setTasks(tasks.filter((task) => task.id !== id ))
}

//set reminder 
const setReminder = (id) => {
  // console.log('Reminder set!', id);
  // if the task.id is equal to the one clicked on, the task reminder will change to the opposite of what it used to be
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header/>
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} setReminder={setReminder}/> : (<h3>No Task to show!</h3>)}

    </div>
  );
}



export default App;
