import React, {useState}  from "react";

const App = () =>{
    const [count , setCount] = useState(0);

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button></button>
        </div>
    );


}

export default App;