import { useState } from "react";

export default function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the login logic, e.g., API call
        // alert(`Username: ${username}, Password: ${password}`);
        console.log(`Username: ${username}, Password: ${password}`);
        
    };
    return(
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

