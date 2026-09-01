import { useState } from "react";
import College from "./College";
import { StudentData } from "./StudentContext";

function App() {
  const [state, setState] = useState("History");
  return (
    <div style={{backgroundColor: "red", padding:20}}>
      1st Component
      <StudentData.Provider value={{state, setState}}>
        <College />
      </StudentData.Provider>
    </div>
  )
}

export default App