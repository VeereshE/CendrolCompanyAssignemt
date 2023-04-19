import {React,useState} from "react"
import "./index.css"

const ButtonContainer =() =>{

    const [color,setColor] = useState("true")

    const onChangeBackgroundColor = () =>{
        setColor(color?"background-color-red":"background-color-blue")
    }

    return(
       <div className = "button-container">
         <button type="button" className="button" onChange={onChangeBackgroundColor} value={color}>Change Color</button>
       </div>
    )
}

export default ButtonContainer