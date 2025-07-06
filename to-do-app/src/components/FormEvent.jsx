import React from "react";


function FormEvent(){

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("فرم ارسال شد");    
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name..." />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default FormEvent;