import {BsDot, BsThreeDots} from 'react-icons/bs';
import {FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa';
import {BiSolidBarChartAlt2} from 'react-icons/bi';
import {FiShare} from 'react-icons/fi';




const Timeline = () => {
    return (         
    <main className=" timeline sticky top-0 flex max-w-[625px] w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
    <h1 className="home_icon text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
       Home </h1>
    <div className=" border-t-[0.5px] px-4 border-b-[0.5px] flex items-strecth py-6 space-x-2 border-gray-600 relative">
    <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
    <div  className="flex flex-col w-full h-full">
      
        <input 
        type="text" 
        className="w-full h-full text-xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" 
        placeholder="Write a Peck!"
        />
      <div className="w-full justify-between items-center flex">
        <div>

        </div>
        <div className="w-full max-w-[100px]">
          <button className='rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'>
      Peck </button>
        </div>

      </div>
      </div>
    </div>
    <div className="  flex flex-col">

      {
        Array.from({length:6}).map((_,i)=>( 
          <div 
          key={i} 
          className=" border-b-[0.5px] border-gray-600 p-4 flex space-x-4">
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full"/>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center w-full justify-between ">
                <div className="flex items-center space-x-1 w-full">
              <div className="font-bold">~ Ross Codes ~</div>
              <div className="text-gray-500">@Grossthecoder</div>
              <div className="text-gray-500"> <BsDot/></div>
              <div className="text-gray-500">42 minutes ago</div>
              </div>
              <div className="text-gray-500"> <BsThreeDots/> </div>
              </div>
              <div className="text-white text-base ">Wondering how to code myself out of the matrix???? Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Inventore, officiis pariatur obcaecati ea illum nihil placeat fuga doloribus at vitae modi? Fuga consequatur
                vel corporis esse tempore, architecto itaque illo!
                </div>
              <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mt-2"></div>
              <div className="flex items-center justify-between space-x-20 mt-4 w-full">
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                   <FaRegComment/> </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                   <FaRetweet/> </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"> 
                  <FaRegHeart/> </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"> 
                  <BiSolidBarChartAlt2/> </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"> 
                  <FiShare/> </div>
              </div>

            </div>
            </div>          

        ))
      }

    </div>
   
  </main>
    )
}


export default Timeline;
