function Card({id,title,instructor,category,seats}) {
  return (
    <div style={style}>
        <h1>{title}</h1>
        <h3>{instructor}</h3>
        <p>{id}</p>
        <p>{category}</p>
        <p>{seats}</p>
    </div>
  )
}
const style = {
    border: "1px solid gray",
    width: 200,
    padding: 20,
    textAlign: "center",
    margin: 10,
    borderRadius: 30
}

export default Card