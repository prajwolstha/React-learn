import { useState } from "react";
function RegisterForm(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const handleClear =() =>{
        setEmail("");
        setPassword("");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response =await fetch("http://localhost:5000/api/auth/register",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({email,password})     
            });
            const data = await response.json();
            if(response.ok){
                alert(data.message);
                handleClear();
            }else{
                alert(data.message);
            }   
                }   
                catch(error){
                    console.error(error);
                    alert("Server error");

                }
        }
    return(
        <div>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default RegisterForm;