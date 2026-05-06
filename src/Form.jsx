import { useState } from "react";
function Form(){
    const [name,setname] =useState("")   
    const [email,setemail] =useState("")
     return(
        <div>
            <h1>INPUT FORM</h1>
            <input type="text" placeholder="Enter name" 
             value={name} onChange={(e) => setname(e.target.value)}/>

             <br /><br />
                <input type="email" placeholder="Enter email"
                value ={email} onChange={(e) => setemail(e.target.value)} />

            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}
export default Form;