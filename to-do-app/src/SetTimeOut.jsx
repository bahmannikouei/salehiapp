import { useEffect} from "react";

function App() {
    useEffect(()=> {
        const timeout = setTimeout(()=>{
            console.log('This runs once after 3 seconds');
        } , 3000 );

        return() => clearTimeout(timeout); // unmount پاکسازی
          } , []);

    return <div> Waiting...</div>
}

export default App;