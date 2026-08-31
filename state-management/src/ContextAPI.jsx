import { createContext, useState } from "react";

const Context = createContext();

function ContextAPI({children}) {
    const [username ,setUsername] = useState("Rameez");
  return (
    <Context.Provider value={{username,setUsername}}>
        {children}
    </Context.Provider>
  )
}

export default ContextAPI