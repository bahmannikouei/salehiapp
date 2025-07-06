import React from "react";
import '../drag.css';

function DrogDropEvent() {
    const dropHandle = (e)=>{
        e.preventDefault();
        console.log("آیتم رها شد");        
    }
    
    const dragOver = (e)=>{
        e.preventDefault();
    }

    return(
        <div 
        onDrop={dropHandle}
        onDragOver={dragOver}
        className="DragDiv"
        >فایل رو اینجا درگ کن</div>
    )
}
export default DrogDropEvent;