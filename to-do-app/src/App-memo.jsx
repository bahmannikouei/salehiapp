import React , {useState , useCallback} from "react";


const Child = React.memo(({onClick }) => {
    console.log("Child component rendered");
    return (
        <div>
        <button onClick={onClick}>Child Click</button>
        </div>
    );
});


const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
        console.log("Button clicked, count updated");
    }, []);

    // const handleClick = () => {
    //     setCount(prevCount => prevCount + 1);
    //     console.log("Button clicked, count updated");
    // }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child onClick={handleClick} />
        </div>
    );
}

export default App;