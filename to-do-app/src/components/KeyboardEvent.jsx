import React from "react";

function KeyboardEvent(){
    const handleKeyDown = (e)=>{
        console.log("Key:", e.key);
        if(e.key == "Escape"){
            alert("چرا کلید ESC رو زدی؟")
        }
    }
    return(
        <div>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Enter press Key.."/>
        </div>
    )
}


export default KeyboardEvent;