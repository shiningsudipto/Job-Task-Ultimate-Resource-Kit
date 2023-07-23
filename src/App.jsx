import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import SmallNavbar from "./shared/SmallNavbar";

const App = () => {
  return (
    <div className="flex relative">
      <Navbar />
      <Outlet />
      <div className="lg:hidden block fixed bottom-0 z-20 w-full">
        <SmallNavbar />
      </div>
    </div>
  );
};

export default App;