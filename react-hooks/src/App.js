import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [ marks, setMarks ] = useState("");
  const [status, seStatus] = useState("");

  useEffect(() => {
    console.log("Marks:", marks);
    getResult(marks);
  }, [marks]);

  const getResult = (marks) => {
    if (marks > 35) {
      seStatus("Pass");
    } else {
      seStatus("Fail");
    }

  }

  return (
    
    <form>
      <h1>React Hooks Example</h1>
      <input type="text" value={marks} onChange= {(e) =>  setMarks(e.target.value)} placeholder="Enter Marks">
      </input>
      <h2><p>{marks}</p></h2>
      <h2><p>{status}</p></h2>
    </form>
  );
}

export default App;
