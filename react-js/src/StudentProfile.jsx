import './studentProfile.css'

const StudentProfile = (prop) => {
    const name = prop.propName;
    const age = 22;
    const university = "UCP";
    const program = "Computer Science";
    const isActive = true;

    const skills = [
    "JavaScript",
    "React",
    "C++",
    "Git"
];
console.log(prop.children)
const semester = 6;
const cgpa = 3.5;
const department = "FOITCS";
  return (
    <div className="student-card" style={style.card}>
        <h2>❣︎ Student Profile ❣︎</h2>
        <hr />
        <h3 className="student-name">{name.toUpperCase()}</h3>

        <p>{age}</p>
        <p>Age Next Year: {age+1}</p>
        <p>{university}</p>
        <p>{program}</p>
        <p><b>Status:</b> {isActive ? "Active" : "Inactive"}</p>

        <h3>Skills</h3>
        {skills.map((el,idx)=><p key={idx}> - {el}</p>)}

        <p>Semester: {semester}</p>
        <p>CGPA: {cgpa}</p>
        <p>Department: {department}</p>
        <p>CGPA Improved: {cgpa + 0.2}</p>
    </div>
  )
}

const style = {
    card:{
        border: "1px solid gray",
        padding: "20px",
        width: "230px"
    },
    h1:{
        color:"blue"
    }
}


export default StudentProfile;