import { useEffect, useState } from "react";
import Card from "./Card";

function Filter({data, setData}) {
  const [input, setInput] = useState("");
  const [copy, setCopy] = useState(data);
 
  function search() {
    if(input===""){
      setCopy(data);
      return;
    }
    setCopy(data.filter((el)=>el.instructor.includes(input)))
    console.log(input)
    console.log(data)
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={search}>Search</button>
<div style={{display: "flex", flexWrap: "wrap"}}>
        {copy.map(el=>{
            return <Card id={el.id} title={el.title} instructor={el.instructor} category={el.category} seats={el.seats}/>
        })}
    </div>
    </div>
  )
}

export default Filter