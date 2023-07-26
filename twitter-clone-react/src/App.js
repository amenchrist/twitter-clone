import LeftSideBar from "./Components/LeftSideBar";
import Timeline from "./Components/Main";
import {BsSearch} from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative border-4">
        
        <LeftSideBar />
        <Timeline />


       <section className=" w-full sticky top-0 border-4 flex flex-col items-stretch h-screen px-6">
        <div>
          <div className="relative w-full h-full">
          <label
           htmlFor="searchBox" 
           className="absolute top-0 left-0 h-full flex items-center justify-center">
          <BsSearch className=" search_icon w-5 h-5 "/>
          </label>
          <input id="searchBox" type="text" placeholder="Search Peckr" className=" text-gray-500 outline-none bg-neutral-900/90 border-none w-full h-full rounded-xl py-4 px-8"/>
          </div>
        </div>
        <div></div>
        <div></div>

       </section>
      </div>
    </div>
  );
};

export default Home;