import GrandChild from "./GrandChild";

function Child({count}) {
  return (
    <div>
        <GrandChild count = {count}/>
    </div>
  )
}

export default Child