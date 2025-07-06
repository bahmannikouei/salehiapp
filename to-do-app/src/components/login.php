<?php 
$username =$_GET['username'];
$password =$_GET['password'];

if ($username == 'admin' && $password == 'password') {
    echo "Login successful!";
    header("Location: /dashboard.php");
} else {
    echo "Invalid username or password.";
    header("Location: /login.php?error=1007");
}
?>