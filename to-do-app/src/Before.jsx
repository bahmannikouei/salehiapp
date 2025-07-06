import React from "react";

class Counter extends React.Component {
    state = {count : 0};

    componentDidMount(){
        document.title = `Count: ${this.state.count}`;
        
    }

    componentDidUpdate(){
        document.title = `Count: ${this.state.count}`;
    }

    render(){
        return(
            <button onClick={()=> this.setState({count: this.state.count + 1 })}> Click Me</button>
        )
    }
}