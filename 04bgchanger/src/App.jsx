import { useState } from "react"
import vite from "/vite.svg"
import reactLogo from "./assets/react.svg"


function App() {
  const [color , setColor] = useState("olive") //state

  return (
    <>
     <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className="py-3"><h1 className=" flex flex-wrap justify-center align-top font-mono text-3xl rounded-full py-6" style={{backgroundColor: "antiquewhite"}} >React Project : Background Color Changer</h1></div>
      <div>
        <img src={reactLogo} className="animate-spin w-20 h-20 mx-auto" alt="React logo" />
        <img src={vite} className="animate-spin w-20 h-20 mx-auto" alt="Vite logo" />
      </div>
      <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className = "flex flex-wrap justify-evenly gap-3 shadow-lg bg-white px-10 rounded-3xl">
          <button onClick= {()=>{
            setColor("red")
          }} className= "outline-none px-5 py-2 rounded-full shadow-sm text-white" style={{backgroundColor: "red"}} >RED</button>
          <button onClick= {()=>{
            setColor("green")
          }} className= "outline-none px-5 py-2 rounded-full shadow-sm text-white" style={{backgroundColor: "green"}}>GREEN</button>
          <button  onClick= {()=>{
            setColor("blue")
          }}className= "outline-none px-5 py-2 rounded-full shadow-sm text-white" style={{backgroundColor: "blue"}}>BLUE</button>
          <button  onClick= {()=>{
            setColor("yellow")
          }}className= "outline-none px-5 py-2 rounded-full shadow-sm text-black" style={{backgroundColor: "gold"}}>YELLOW</button>
          <button  onClick= {()=>{
            setColor("olive")
          }}className= "outline-none px-5 py-2  shadow-sm text-white rounded-full" style={{backgroundColor: "black"}}>Default</button>
          
        </div>
      </div>
     </div>
    </>
  )
}

export default App
