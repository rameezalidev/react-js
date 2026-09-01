import { useEffect, useState } from "react";
function SignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: 0
    })  

    const [feedback, setFeedback] = useState("");
    const [skills, setSkills] = useState("frontend");

    useEffect(()=>{
        console.log(feedback)
    },[feedback])
    function updateStateData(e) {
        setForm({...form, [e.target.name]: e.target.value});
        console.log(form)
    }
  return (
    <>
    <form action="">
        <input type="text" placeholder="enter name..." value={form.name} name="name" onChange={(e)=>updateStateData(e)}/>
        <input type="email" placeholder="enter email..." value={form.email} name="email" onChange={(e)=>updateStateData(e)}/>
        <input type="text" placeholder="enter password..." value={form.password} name="password" onChange={(e)=>updateStateData(e)}/>
        <input type="text" placeholder="confirm password..." value={form.confirmPassword} name="confirmPassword" onChange={(e)=>updateStateData(e)}/>
        <input type="number" placeholder="enter age..." value={form.age} name="age" onChange={(e)=>updateStateData(e)}/>

        <select name="skills" value={skills} onChange={(e)=>setSkills(e.target.value)}>
            <option value="">Select Options</option>
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="database">database</option>
        </select>

        <p><b>Skill: </b>{skills}</p>

        <textarea onChange={(e)=>setFeedback(e.target.value)} value={feedback}></textarea>
        <input type="submit" value="submit" />
    </form>
    </>
  )
}

export default SignUp