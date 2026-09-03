import { useMemo, useState } from "react";

function App() {
    
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
    function calculateSum(size=100000000) {
        let arr = [];
        let sum = 0;
        for(let i=0;i<=size;i++) arr.push(i);
        for(let i=0;i<=size;i++) sum+=arr[i];
        return sum;
    }
   let res= useMemo(()=>{
        return calculateSum(number);
    },[number])

    
  return (
    <div>
        <h1>useMemo Hook</h1>
        <p>Count: {count}</p>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <p>Sum: {res}</p>

        <button onClick={handleClick}>increment</button>
    </div>
  )
}

export default App