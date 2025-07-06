import { useState, useEffect } from "react";

function App(){
    // localStorage.removeItem('theme');
    const  savedTheme = localStorage.getItem('theme');
    const [theme , setTheme] = useState(savedTheme || 'light');
    useEffect(()=>{
        localStorage.setItem('theme' , theme)
        document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#000000';
        document.body.style.color = theme === 'light' ? '#000000' : '#fffff';
        return() => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };

    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');

    };

    return(
        <div style={{textAlign:'center' , marginTop:'100px'}}>
            <h1>Theme is: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default App;