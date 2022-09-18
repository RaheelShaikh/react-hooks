import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [ marks, setMarks ] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("Marks:", marks);
    getResult(marks);
  }, [marks]);

  const getResult = (marks) => {
    if (marks == "") {
      setResult("");
    } else if (marks > 35) {
      setResult("Pass");
    } else  if (marks < 35 ) {
      setResult("Fail");
    } 

  }

  return (
    
    <form>
      <h1>React Hooks Example</h1>
      <input type="text" value={marks} onChange= {(e) =>  setMarks(e.target.value)} placeholder="Enter Marks">
      </input>
      <h2><p>You Entered : {marks}</p></h2>
      <h2><p>Your Result is : {result}</p></h2>
    </form>
  );
}

export default App;
