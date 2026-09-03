
function Home() {
  return (
    <div>
       <div className="slider">
        <img src="https://static.vecteezy.com/system/resources/previews/012/615/104/non_2x/lms-learning-management-system-lms-banner-web-illustration-concept-for-with-icons-vector.jpg" width={1600} alt="" />
       </div>

       <button style={style}>Show Courses</button>
    </div>
  )
}


const style = {
    backgroundColor: "black",
    color: "white",
    padding: 50,
    border: "2px solid white",
    borderRadius: 20,
    cursor: "pointer",
    width: "100%"
}

export default Home