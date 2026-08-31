import Parent from "./Parent";
import StudentProfile from "./StudentProfile";

const App = () => {
  return (
    <div>
      <StudentProfile propName={"rameez ali khan"}>
        <h1>Hello World</h1>
      </ StudentProfile>
      <Parent />
      <hr />
    </div>
  )
}
export default App;