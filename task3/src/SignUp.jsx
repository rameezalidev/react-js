import { useEffect, useState } from "react";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: 0,
  });

  const [feedback, setFeedback] = useState("");
  const [skills, setSkills] = useState("frontend");

  useEffect(() => {
    console.log(feedback);
  }, [feedback]);

  function updateStateData(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    console.log(form);
  }

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f4f6f8",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "100%",
      maxWidth: "500px",
      backgroundColor: "#ffffff",
      padding: "35px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    },

    heading: {
      textAlign: "center",
      marginBottom: "8px",
      color: "#222",
      fontSize: "30px",
    },

    subtitle: {
      textAlign: "center",
      color: "#777",
      marginBottom: "30px",
      fontSize: "14px",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },

    label: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "-8px",
    },

    input: {
      width: "100%",
      padding: "13px 15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      boxSizing: "border-box",
      backgroundColor: "#fafafa",
    },

    select: {
      width: "100%",
      padding: "13px 15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      backgroundColor: "#fafafa",
      cursor: "pointer",
    },

    textarea: {
      width: "100%",
      minHeight: "100px",
      padding: "13px 15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      resize: "vertical",
      boxSizing: "border-box",
      backgroundColor: "#fafafa",
      fontFamily: "Arial, sans-serif",
    },

    skillBox: {
      padding: "12px 15px",
      backgroundColor: "#f1f3f5",
      borderRadius: "8px",
      fontSize: "14px",
      color: "#444",
    },

    submit: {
      marginTop: "10px",
      padding: "13px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#222",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h1 style={styles.heading}>Create Account</h1>

        <p style={styles.subtitle}>
          Fill in the information below to create your account
        </p>

        <form action="" style={styles.form}>

          <label style={styles.label}>Name</label>

          <input
            type="text"
            placeholder="Enter name..."
            value={form.name}
            name="name"
            onChange={updateStateData}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>

          <input
            type="email"
            placeholder="Enter email..."
            value={form.email}
            name="email"
            onChange={updateStateData}
            style={styles.input}
          />

          <label style={styles.label}>Password</label>

          <input
            type="password"
            placeholder="Enter password..."
            value={form.password}
            name="password"
            onChange={updateStateData}
            style={styles.input}
          />

          <label style={styles.label}>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password..."
            value={form.confirmPassword}
            name="confirmPassword"
            onChange={updateStateData}
            style={styles.input}
          />

          <label style={styles.label}>Age</label>

          <input
            type="number"
            placeholder="Enter age..."
            value={form.age}
            name="age"
            onChange={updateStateData}
            style={styles.input}
          />

          <label style={styles.label}>Skills</label>

          <select
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            style={styles.select}
          >
            <option value="">Select Options</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">Database</option>
          </select>

          <div style={styles.skillBox}>
            <b>Selected Skill:</b> {skills}
          </div>

          <label style={styles.label}>Feedback</label>

          <textarea
            placeholder="Write your feedback..."
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
            style={styles.textarea}
          ></textarea>

          <input
            type="submit"
            value="Create Account"
            style={styles.submit}
          />

        </form>
      </div>
    </div>
  );
}

export default SignUp;
