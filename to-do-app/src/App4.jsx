import { useState , useEffect } from "react";

function App() {
    const [count , setCount] = useState(0);

useEffect (()=>{
    document.title = `Counter: ${count}`;
}, [count]);

return (
    <div> 
        <h1>Clicked</h1>
        <button onClick={()=> setCount(count + 1)}>Click</button>
    </div>
)
}

export default App;
