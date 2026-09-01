import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const [loggedIn, setLoggedin] = useState(false);
  return (
    <div>
      {loggedIn ? <Login /> : <SignUp />}
      {loggedIn ? <p>Dont have account? <a onClick={()=>setLoggedin(!loggedIn)}>Sign Up</a></p> :  <p>Already have an account? <a onClick={()=>setLoggedin(!loggedIn)}>Login</a></p>
      }
    </div>
  )
}

export default App