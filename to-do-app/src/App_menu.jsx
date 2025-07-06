import  {useState , lazy , Suspense} from "react";
import Loading from "./Loading";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
// import Home from "./Home";


export default function App() {
    const [page , setPage] = useState("home"); 
    return (
        <div className="app">
            <header>
                <h1>My App</h1>
                <nav>
                    <button onClick={() => setPage("home")}>Home</button>
                    <button onClick={() => setPage("about")}>About</button>
                </nav>
            </header>
            <main>
                <Suspense fallback={<Loading />}>
                    {page == "about" && <About />}
                    {page == "home" && <Home />}
                </Suspense>
            </main>
        </div>
    );
}