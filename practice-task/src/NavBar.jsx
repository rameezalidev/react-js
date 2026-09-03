import {Link} from "react-router-dom"
function NavBar() {
  return (
    <div>
        <ul style={style.ul}>
            <Link to="/" style={style.a}><li>Home</li></Link>
            <Link to="/courses" style={style.a}><li>Courses</li></Link>
            <Link to="/search" style={style.a}><li>Search & Filter</li></Link>
            <Link to="/enrollment" style={style.a}><li>Enrollment</li></Link>
            <Link to="/my-courses" style={style.a}><li>My Courses</li></Link>
        </ul>
    </div>
  )
}


const style = {
    ul:{
        display: "flex",
        listStyleType: "none",
        gap: 40,
        backgroundColor: "black",
        padding: 30
    },
    a: {
        color: "white",
        textDecoration: "none"
    }
}
export default NavBar