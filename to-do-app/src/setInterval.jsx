import { useEffect } from "react";

function App(){
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log('This runs every 2 seconds');
        }, 500);
        return () => clearInterval(interval);
    }, [])
    return <div> Interval running...</div>;
}

export default App;