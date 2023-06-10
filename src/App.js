import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <div className="grow min-h-0">
        <div className="h-full w-full flex ">
          <Sidebar />
          <div className="grow min-w-0">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
