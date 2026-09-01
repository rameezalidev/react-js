import { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [list, setList] = useState(["rameeez", "ali", "khan"]);
  const [input, setInput] = useState("");

  function addToList() {
    if (!input.trim()) return;

    setList([...list, input]);
    setInput("");
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>My List</h1>
          <p>Add and manage your items</p>
        </div>

        <div className="input-box">
          <input
            type="text"
            value={input}
            placeholder="Enter a name..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addToList();
            }}
          />

          <button onClick={addToList}>Add</button>
        </div>

        <List list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
