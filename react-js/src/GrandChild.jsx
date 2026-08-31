import GrandGrandChild from "./GrandGrandChild";

function GrandChild({count}) {
  return (
    <div>
        <GrandGrandChild count={count}/>
    </div>
  )
}

export default GrandChild