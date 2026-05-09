// ================= LoginForm.jsx =================

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // clear inputs
  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  // login submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        }
      );

      const data = await response.json();

      if (response.ok) {

        // store token
        localStorage.setItem("token", data.token);

        alert(data.message);

        // move to dashboard
        navigate("/dashboard");

        handleClear();

      } else {

        alert(data.message);

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

      <br /><br />

      <button
        onClick={handleSubmit}
        disabled={!email || !password}
      >
        Login
      </button>

      <button
        onClick={handleClear}
        disabled={!email && !password}
      >
        Clear
      </button>

    </div>
  );
}

export default LoginForm;