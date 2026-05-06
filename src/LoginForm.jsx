import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClear = ()=>{
        setEmail("");
        setPassword(""); 

  
    }
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

   if (response.ok) {
  console.log(data); // 🔍 see full response

  // ✅ store token
  localStorage.setItem("token", data.token);

  alert(data.message);
  handleClear();
}else {
      alert(data.message); // error from backend
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};
    return (
        <div>
            <h1>Login Form</h1>
            <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} disabled={!email || !password}>Login</button>
            <button onClick ={handleClear} disabled={!email && !password}>Clear</button>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    );

}  
export default LoginForm;