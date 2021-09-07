import './App.css';
import {useState} from "react"
function App() {
  const[count,setCount] = useState(0);

  return (
    <div data-test='component-app' style={{textAlign:'center'}}>
      <h1>Counter app designed using Test-Driven-Development Test Cases approach</h1>
      <hr></hr>
      <br/>
        <h1 data-test="counter-display">
          The counter is cuurently&nbsp;
          <span data-test="count">{count}</span>
        </h1>
    <button 
    data-test="increment-button"
    onClick={() => setCount(count + 1)} style={{background:"lightgreen", 
    padding:"20px",fontSize:"20px", borderRadius:"30px", border:"white"}}>
      Increment the counter</button>
    </div>
  );
}

export default  App;
