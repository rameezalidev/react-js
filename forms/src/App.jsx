import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const [loggedIn, setLoggedin] = useState(false);
  return (
    <div>
      {loggedIn ? <Login /> : <SignUp />}
    </div>
  )
}

export default App