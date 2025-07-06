import { useState , useEffect } from "react";

export function useTimer(){
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(()=> setSeconds(s => s + 1 ), 1000);
        return () => clearInterval(id);
    },[]);

    return seconds;
}