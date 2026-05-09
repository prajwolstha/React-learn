// ================= Dashboard.jsx =================

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        // get token
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/auth/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.ok) {

          setUser(data.user);

        } else {

          alert(data.message);

        }

      } catch (error) {

        console.log(error);

      }
    };

    fetchDashboard();

  }, []);

  // logout function
  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (
    <div>

      <h1>Dashboard</h1>

      {user ? (
        <div>

          <p>User ID: {user.userId}</p>

          <p>Email: {user.email}</p>

        </div>
      ) : (
        <p>Loading...</p>
      )}

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;