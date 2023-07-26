import {BsSearch} from "react-icons/bs";

const RightSideSection = () => {
  return(

  <section className=" rightside w-full sticky top-2 mt-2 flex flex-col items-stretch h-screen px-6">
  <div>
    <div className="relative w-full h-full group">
    <input id="searchBox"
     type="text" 
     placeholder="Search Peckr" 
     className=" text-white  outline-none peer focus:border-primary focus:border focus:bg-black bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-10"/>
               <label
     htmlFor="searchBox" 
     className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary">
    <BsSearch className=" search_icon w-5 h-5"/>
    </label>
    </div>
  </div>
  <div className=" flex flex-col rounded-xl bg-neutral-900  my-4">
    <h3 className="font text-white text-xl my-2 px-2"> What's happening</h3>
    <div>
      {
        Array.from({length:5}).map((_,i)=>(
          <div className="text-white hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200" key={i}>
          <div className="font-bold text-lg">#Trending {i + 1}</div>
          <div className="text-xs text-neutral-400"> 3.14k</div>
        </div>
        ))
      }
    </div>
  </div>
  <div></div>

 </section>
  )

}


export default RightSideSection;
