import Button from './Button';
import Card from './Card';
import Input from './Input';

const style ={
  display: "flex",
  flexWrap: "wrap",
  padding: 20
}
function App() {
  return (
    <>
      <Input placeholder={"Search Product here"}/> 
    <div style={style
    }>
      <Card title={"Photography"} description={"You can hire photographer"}/>
      <Card title={"Decor"} description={"Book your Decor"}/>
     
      
    </div>
    </>
  )
}

export default App