const style = {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    border: "none",
    borderRadius: 20,
    fontWeight: "bolder",
    cursor: "pointer"
}
function Button({text}) {
  return (
    <button style={style}>{text}</button>
  )
}

export default Button