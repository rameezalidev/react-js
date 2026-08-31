import Child from "./Child";

function Parent() {
    let count = 89;
  return (
   <>
     <Child count={count}/>
    <div>Parent</div>
   </>
  )
}

export default Parent