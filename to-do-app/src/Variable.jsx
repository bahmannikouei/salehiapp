import React , {useState} from "react";
// const version = Date.now();
import DynamicStyle from "./components/DynamicStyle";


const App = () => {

    const greeting = "Hallo React";
    let number = 10;
    
    return ( 
      <div>
          <h1>{greeting}</h1>
          <p>Number: {number + 10}</p>
      </div>
    )
}

export default App;
