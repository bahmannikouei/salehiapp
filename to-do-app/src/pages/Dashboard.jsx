import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <h1>شما لاگین شدید به داشنبود</h1>
        </div>
    );
}
export default Dashboard;