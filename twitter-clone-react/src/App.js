import LeftSideBar from "./Components/LeftSideBar";
import Timeline from "./Components/Main";
import RightSideSection from "./Components/RightSection"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative ">
        
        <LeftSideBar />
        <Timeline />
        <RightSideSection />
       
      </div>
    </div>
  );
};

export default Home;