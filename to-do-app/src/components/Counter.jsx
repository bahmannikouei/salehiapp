import { useCounter } from "../Hook/useCounter";

export default function Counter() {
    const { count, increment } = useCounter();
    
    return (
        <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        </div>
    );
}