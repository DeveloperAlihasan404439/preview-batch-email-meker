import { Outlet } from "react-router-dom";
import Nabvar from "../Shared/Nabvar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;