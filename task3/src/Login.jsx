import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login Form</h1>

        <form action="" style={styles.form}>
          <input
            type="text"
            placeholder="Enter username..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <input
            type="submit"
            value="Submit"
            style={styles.submit}
          />
        </form>

        <hr style={styles.divider} />

        <h2 style={styles.dataTitle}>Form Data</h2>

        <p style={styles.data}>
          <b>Name: </b>
          {name}
        </p>

        <p style={styles.data}>
          <b>Password: </b>
          {password}
        </p>
      </div>
    </div>
  );
}



  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f6f8",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "400px",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    },

    title: {
      textAlign: "center",
      marginBottom: "25px",
      color: "#222",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },

    input: {
      padding: "12px 15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
    },

    submit: {
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#222",
      color: "white",
      fontSize: "15px",
      cursor: "pointer",
    },

    divider: {
      margin: "25px 0",
      border: "none",
      borderTop: "1px solid #eee",
    },

    dataTitle: {
      fontSize: "20px",
      marginBottom: "15px",
      color: "#333",
    },

    data: {
      padding: "10px",
      margin: "5px 0",
      backgroundColor: "#f7f7f7",
      borderRadius: "6px",
      color: "#555",
    },
  };

export default Login;

