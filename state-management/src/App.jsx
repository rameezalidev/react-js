import { useState } from "react";
import StudentProfile from "./StudentProfile";
import TaskCounter from "./TaskCounter";

function App() {
  const [name,setName] = useState("Rameez");
  const [age,setAge] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  function increaseAge() {
    setAge(age=>age+1);
  }

  function addTask() {
    setTaskCompleted(task=>task+1);
  }
  return (
    <div>
      <input type="text" placeholder="enter name..." onChange={(e)=>setName(e.target.value)}/>
  
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={addTask}>Add Task</button>

      <StudentProfile name={name} age={age} />
      <TaskCounter taskCount={taskCompleted}/>
    </div>
  )
}

export default App