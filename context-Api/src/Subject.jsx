import { useContext } from "react";
import { StudentData } from "./StudentContext";

function Subject() {
  const {state, setState} = useContext(StudentData);
  setState("Object oriented Programming")
  return (
    <div style={{backgroundColor: "skyblue", padding:20}}>
        Subject: {state}
    </div>
  )
}

export default Subject