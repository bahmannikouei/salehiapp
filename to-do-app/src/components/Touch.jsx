import React from "react";
import './touch.css';

function Touch(){
    const TouchHandle = ()=>{
    console.log("تاچ شروع شد"); 
    }
    return(
        <div onTouchStart={TouchHandle} className="divTouch">
            از اینجا تاچ کن 
        </div>
    )
}

export default Touch;