import { useContext, useEffect, useRef, useState } from "react";
import StudentProfile from "./StudentProfile";
import TaskCounter from "./TaskCounter";

function App() {
  const [name,setName] = useState("Rameez");
  const [age,setAge] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [text, setText] = useState("");
  const input = useRef(null);
  const [show, setTrue] = useState(false);
  function focus() {
    input.current.focus();  
  }
  const students = [ 
  "Rameez",
  "Ali",
  "Ahmed",
  "Usman"
];

// const {username, setUsername} = useContext("./ContextAPI");
useEffect(()=>{
  console.log("Called once")
},[age])
  function increaseAge() {
    setAge(age=>age+1);
  }

  function addTask() {
    setTaskCompleted(task=>task+1);
  }
  const [isLoggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(!isLoggedIn);
  }
  if(isLoggedIn) {
    return (
    <div>
      <h1>From Context API: {username}</h1>
      <input type="text" placeholder="enter name..." onChange={(e)=>setName(e.target.value)}/>
  
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={addTask}>Add Task</button>

      <StudentProfile name={name} age={age} />
      <TaskCounter taskCount={taskCompleted}/>

      <button onClick={login}>Log out</button>
    </div>
  )
  } else {
    return (
      <div>
        <p>Please log in first...</p>
        {/* <h3>List here</h3>
        {students.filter(el=>el.length > 4).map(
          (el,idx) => <h2 key={idx}>{el}</h2>
        )} */}

        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} ref={input}/>
        <button onClick={
          ()=> setTrue(show=>!show)
        }>Print</button>
          {show && <h2>{text}</h2>}

          <button onClick={focus}>Focus</button>
        <button onClick={login}>Log In</button>
      </div>
    );
  }
}

export default App