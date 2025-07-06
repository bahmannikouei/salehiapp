import {useEffect} from "react";

function WindowEvent() {

    useEffect(()=>{
        const handleResize = ()=>{
            console.log("W:", window.innerWidth , "H:" , window.innerHeight);
            if(window.innerHeight <= 200 ){
                alert("آقا بسه دیگه خیلی کم شد")
            }
        }
        window.addEventListener("resize",handleResize);

         return () => {
        window.removeEventListener("resize", handleResize);
    }
    },[]);

    return(
        <div>اندازه پنجره جاری رو تغییر بده </div>
    )
   
}
export default WindowEvent;