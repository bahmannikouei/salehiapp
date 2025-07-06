import React from "react";
 
function App(event) {
    const handleClick = () => {
        alert('Clicked...');
        console.log(event);
        
    }
    return(
        <button onClick={handleClick(event)}>Click me!</button>
    )
}

export default App;