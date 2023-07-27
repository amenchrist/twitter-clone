import { Outlet } from "react-router-dom";
import LeftSideBar from "./Components/LeftSideBar";
import RightSideSection from "./Components/RightSection"
import Router from './routes';
import './App.css';

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative ">
        
        <LeftSideBar />
        <Router />
        <Outlet />
        <RightSideSection />
       
      </div>
    </div>
  );
};

export default Home;