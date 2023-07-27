import {BsSearch} from "react-icons/bs";

const RightSideSection = () => {
  return(

  <section className=" rightside max-w-[600px] sticky top-2 w-[30%] mt-2 flex flex-col items-stretch h-screen px-6">
  <div>
    <div className="relative w-full h-full group">
    <input id="searchBox"
     type="text" 
     placeholder="Search Peckr" 
     className=" text-white light:text-slate-400 outline-none focus:border-primary focus:border focus:bg-black bg-neutral-900/90 light:bg-neutral-50 w-full h-full rounded-xl py-4 pl-10"/>
               <label
     htmlFor="searchBox" 
     className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 light:text-gray-50 focus:text-primary">
    <BsSearch className=" search_icon w-5 h-5"/>
    </label>
    </div>
  </div>
  <div className=" flex flex-col rounded-xl bg-neutral-900 light:bg-neutral-50 my-4 ">
    <h3 className="font-bold text-white light:text-slate-400 text-xl my-4 px-4"> What's happening</h3>
    <div>
      {
        Array.from({length:5}).map((_,i)=>(
          <div className="text-white light:text-slate-400 hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200" key={i}>
          <div className="font-bold text-lg">#Trending {i + 1}</div>
          <div className="text-xs text-neutral-400 light:text-neutral-50"> 3.14k</div>
        </div>
        ))
      }
    </div>
    </div>
    <div className=" flex flex-col rounded-xl bg-neutral-900 light:bg-neutral-50 my-4">
    <h3 className="font-bold text-white light:text-slate-400 text-xl my-4 px-4"> Who to follow</h3>
    <div>
      {
        Array.from({length:3}).map((_,i)=>(
          <div className="text-white light:text-slate-400 hover:bg-white/10 p-4 flex space-x-3 items-center last:rounded-b-xl transition duration-200" key={i}>
            <div className="w-10 h-10 bg-neutral-600 light:bg-neutral-100 rounded-full"></div>
            <div className="flex flex-col ">
              <div>~ Tutor ~</div>
              <div className="text-gray-500 light:text-gray-50">@TechTalentTutor</div>
            </div>
            <div> 
              <button className="rounded-full px-6 py-2 bg-white light:bg-slate-800 text-neutral-950 light:text-neutral-50"> Follow </button>
            </div>

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
