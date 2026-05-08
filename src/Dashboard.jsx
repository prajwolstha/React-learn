import { useState, useEffect } from "react";

function Dashboard(){
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchDashboard = async () => {

            try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:5000/api/auth/dashboard", {
                headers:{
                    Authorization: `Bearer ${token}`
                }
                }
            );
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
            } else {
                alert(data.message);

            }
        }catch(err){
            console.error("Error fetching dashboard:", err);


        }
    };
    fetchDashboard();
}
    ,[]);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{message}</p>
        </div>
    );
   {user && (
        <div>
          <p>User ID: {user.userId}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      console.log(user.data);
}
export default Dashboard;

