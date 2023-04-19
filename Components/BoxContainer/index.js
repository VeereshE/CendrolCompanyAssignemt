import {React,useState} from "react";

import "./index.css"

const BoxContainer = () =>{

    const [counter,setCounter] = useState(0)

    const onCLickIncreaseValue =() =>{
        setCounter(Number(counter + 1))
    }

   return (
    <div className = "app-container">
       <div className= "box-container">
        <div className= "circle-container">
         <h1 className="number">{counter}</h1>
         <button type ="button" className="buttonIncrease" onClick={onCLickIncreaseValue}>Click to increase counter</button>
        </div>
        </div>
    </div>
   )
}

export default BoxContainer