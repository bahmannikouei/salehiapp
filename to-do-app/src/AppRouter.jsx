import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App(){
    return(
        <Router>
            <div className="myDiv">
                <nav className="myNav">
                    <ul className="myUl">
                        <li className="myLi1">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;