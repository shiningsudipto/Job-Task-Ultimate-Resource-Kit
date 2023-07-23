
import BarCharts from "../../components/BarCharts";
import Analytics from "./Analytics";
import PersonalDetails from "./PersonalDetails";
import Strategy from "./Strategy";

const Home = () => {
    return (
        <div className="w-full lg:grid lg:grid-cols-12 lg:ml-20">
            <div className="lg:col-span-3">
                <PersonalDetails />
            </div>
            <div className="col-span-6 w-full">
                <Analytics />
            </div>
            <div className="col-span-3">
                <Strategy />
            </div>
        </div>
    );
};

export default Home;