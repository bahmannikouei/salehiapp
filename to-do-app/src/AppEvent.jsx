import { useState } from "react";

function App(){
    const [value , setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const btnClick = ()=>{
        alert('Clicked..')
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>Value: {value}</p>
            <button onClick={btnClick}>{value}</button>
        </div>
    )
}

export default App;