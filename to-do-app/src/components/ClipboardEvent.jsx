import React from "react";

function ClipboardEvent(){
    const handlePaste = (e)=>{
        console.log("Clipboard is:" , e.clipboardData.getData('text'));
    }

    return(
        <div>
            <input type="text" onPaste={handlePaste} placeholder="Past your text here"/>
        </div>
    )
}

export default ClipboardEvent;