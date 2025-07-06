import { useTimer } from "./Hook/useTimer";

function App() {
    const seconds = useTimer();
    
    return (
        <div className="App">
        <h1>Timer</h1>
        <p>Seconds: {seconds}</p>
        <h2>Seconds: {seconds}</h2>
        <p>Min: {}</p>
        <p>H: {seconds}</p>
        <img src="" alt="" className="imgCart"/>
        </div>
    );
}

export default App;