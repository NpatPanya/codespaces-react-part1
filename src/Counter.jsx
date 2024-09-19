import "./Counter.css";
import React, {useState} from "react";
export default function Counter(){
    const [count,setcount] = useState(0);
    const [value,setvalue] = useState("Type here!");
    
    return (<>
    <input 
    type="text"
    value = {value}
    onChange={(event) => setvalue(event.target.value)}/>
    <button className = "resetbutton" onClick={()=> setvalue("Type here!")}>reset</button>
    <p>You type {value.length} chars</p>

    <button onClick={()=> setcount(count + 1)}> Click me </button>
    <button className = "resetbutton" onClick={()=> setcount(0)}> Reset! </button>
    <p> you click {count} times</p>
    </>
    );
}