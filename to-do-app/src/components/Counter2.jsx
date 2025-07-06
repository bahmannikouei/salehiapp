import { useCounter } from "../Hook/useCounter";

export default function Counter() {
    const { count, increment } = useCounter();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onMouseEnter={increment}>Increment</button>
        </div>
    );
}