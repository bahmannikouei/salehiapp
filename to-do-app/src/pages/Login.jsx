const Login = () => {
    const handleLogin = () => {
        // Simulate a login action
        localStorage.setItem('token', '37686868');
        window.location.href = '/dashboard'; // Redirect to dashboard after login
    };

    return (
        <div>
            <h1>صفحه ورود</h1>
            <button onClick={handleLogin}>ورود</button>
        </div>
    )
}
export default Login;