import { useState } from "react";

function Login() {

    const [name, setName] = useState("");
    const [password,setPassword] = useState("");
  return (
    <>
        <form action="">
            <input type="text" placeholder="enter username..." value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="enter password...." value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <input type="submit" value="submit" />
        </form>
        <hr />
        <h1>Form Data</h1>
        <p><b>Name: </b>{name}</p>
        <p><b>Password: </b>{password}</p>
    </>
  )
}

export default Login