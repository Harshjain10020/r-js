import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, HarshCounter]= useState(5)

  //let counter = 5;
  const addValue = ()=>{
    counter += 1;
    if(counter <=20){
    HarshCounter(counter)
    console.log("value added", counter);
    }else{
      counter = 20;
      HarshCounter(counter)
    console.log("max value reached", counter);
    }
    
    
  }

  const removeVal = ()=>{
    counter = counter -1;
    if(counter >=0){
    HarshCounter(counter)
    console.log("value remove", counter)
    }else{
      counter = 0;
      HarshCounter(counter)
    console.log("value remove", counter)
    }
  }

  return (
    <>
      <h1>Counter Display </h1> 
      <h2>React mini Project</h2>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>add Value {counter}</button>
      <br />
      <button onClick = {removeVal}>Remove value {counter}</button>
      <p>we studied basic hooks , how react update value at multiple places</p>
    </>
  );
}

export default App;
