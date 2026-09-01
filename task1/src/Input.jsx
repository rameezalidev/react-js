const style = {
    padding: 10,
    margin: 10,
    border: "none",
    borderBottom: "1px solid blue",
    outline: "none",
    color: "black",
    width: "100%"

}

function Input({placeholder}) {
  return (
    <div>
        <input type="text" placeholder={placeholder} style={style} /> 
    </div>
  )
}

export default Input