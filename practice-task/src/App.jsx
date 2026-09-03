import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Courses from "./Courses";
import Filter from "./Filter";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "React JS",
    instructor: "Ali",
    category: "Frontend",
    seats: 20
  },
  {
    id: 2,
    title: "Node JS",
    instructor: "Ahmed",
    category: "Backend",
    seats: 15
  },
  {
    id: 3,
    title: "Python",
    instructor: "Sara",
    category: "Programming",
    seats: 10
  }
];
function App() {
  const [data, setData] = useState(courses);
  return (
    <>
    <NavBar />
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses data={data} setData={setData}/>}></Route>
        <Route path="/search" element={<Filter data={data} setData={setData}/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App