import React , {useState} from "react";

function BuggyComponent() {

    const [crash, setCrash] = useState(false);
    
    if (crash) {
        // This will throw an error when the button is clicked
        throw new Error("I crashed!");
    }
 
    
    return (
        <div>
            <h1>Buggy Component</h1>
            <p>این کامپوننت بعد از کلیک زدن خراب میشه</p>
            <button onClick={() => setCrash(true)}>Crash خرابش کن </button>
        </div>
    );
}

export default BuggyComponent;