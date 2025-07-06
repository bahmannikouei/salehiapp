import React from "react";
import BuggyComponent from "./BuggyComponent";
import SafeComponent from "./SafeComponent";
import ErrorBoundary from "./ErrorBoundary";


function App() {
    return (
        <div>
            <h1>React Error Boundaries Example</h1>
            <p>این یک مثال ساده از Error Boundaries در React است</p>
            <ErrorBoundary>
                <SafeComponent />
            </ErrorBoundary>
            
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>
        </div>
    );
}

export default App;