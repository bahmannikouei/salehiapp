import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (localStorage.getItem("token")) {
        navigate("/dashboard");
        }
    }, [navigate]);
    
    const handleLogin = () => {
        // Simulate a login API Query call Database
        if (username === "admin" && password === "1234") {
        localStorage.setItem("token", "fake-123456");
        navigate("/dashboard");
        } else {
        setError("Invalid username or password");
        }
    };
    
    return (
        <div className="login-container">
        <h2>Login</h2>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
        </div>
        
    );    
}

