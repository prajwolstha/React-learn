import { useState } from "react";
function Form(){
    const [name,setname] =useState("")   
     return(
        <div>
            <h1>INPUT FORM</h1>
            <input type="text" placeholder="Enter name" 
             value={name} onChange={(e) => setname(e.target.value)}/>
            <p>Name: {name}</p>
        </div>
    );
}
export default Form;