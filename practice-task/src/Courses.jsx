import { useState } from "react";
import Card from "./Card";


function Courses({data}) {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {data.map(el=>{
            return <Card id={el.id} title={el.title} instructor={el.instructor} category={el.category} seats={el.seats}/>
        })}
    </div>
  )
}

export default Courses