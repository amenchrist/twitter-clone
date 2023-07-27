import {BsDot, BsThreeDots} from 'react-icons/bs';
import {FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa';
import {BiSolidBarChartAlt2} from 'react-icons/bi';
import {FiShare} from 'react-icons/fi';
import React, {useState, useEffect } from 'react'
import { useStateContext } from '../contextProvider';

const Timeline = () => {

  const {server} = useStateContext()

  const placeholders = [
    {
      author_id: 1,
      content: "lord wh wid uw dniu wd ihiw dwuie iuje pwpiwue hwpeiu hep weuhpw ehpwep ejp"
    },
    {
      author_id: 2,
      content: "lord wh wid uw dniu wd ihiw dwuie iuje pwpiwue hwpeiu hep weuhpw ehpwep ejp"
    },
    {
      author_id: 3,
      content: "lord wh wid uw dniu wd ihiw dwuie iuje pwpiwue hwpeiu hep weuhpw ehpwep ejp"
    },
    {
      author_id: 4,
      content: "lord wh wid uw dniu wd ihiw dwuie iuje pwpiwue hwpeiu hep weuhpw ehpwep ejp"
    },
    {
      author_id: 5,
      content: "lord wh wid uw dniu wd ihiw dwuie iuje pwpiwue hwpeiu hep weuhpw ehpwep ejp"
    },
    {
      author_id: 6,
      content: "lord wh wid uw dniu wd ihiw dwuie iuje pwpiwue hwpeiu hep weuhpw ehpwep ejp"
    },
    {
      author_id: 7,
      content: "lord wh wid uw dniu wd ihiw dwuie iuje pwpiwue hwpeiu hep weuhpw ehpwep ejp"
    }
  ]

  const [ postContent, setPostContent ] = useState('');
  const [ ready, setReady ] = useState(false);
  const [ error, setError ] = useState(false);
 
  useEffect(()=>{
    const post = {
      content : postContent,
      author_id : 1
    }
  
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(post)
    }

    // if(ready){
    //   fetch(`${server}/posts`, options).then(res => res.json()).then(data => {
    //     if(data){
    //       setPostContent('');
    //       setReady(false)
    //     } else {
    //       setError(true)
    //     }
    //   })
    // }

  }, [ready, postContent, server])

  const [ posts, setPosts] = useState(placeholders);

  useEffect(() => {
    // fetch(`${server}/posts`).then(res => res.json()).then(data => setPosts(data.reverse()));
  })

  return ( 
    <main className=" timeline sticky top-0 flex max-w-[625px] w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="home_icon text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0"> Home </h1>
      <div className=" border-t-[0.5px] px-4 border-b-[0.5px] flex items-strecth py-6 space-x-2 border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div  className="flex flex-col w-full h-full">
          <textarea 
            autoFocus
            className="w-full h-full text-xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" 
            placeholder="Write a Peck!"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            disabled={error}
          />      
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button onClick={() => setReady(true)} 
              className='rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'>
              Peck 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {posts.map((p,i) =>
          ( 
            <div key={i} className=" border-b-[0.5px] border-gray-600 p-4 flex space-x-4">
              <img  className="w-10 h-10 bg-slate-200 rounded-full" src={`https://robohash.org/${p.author_id}`} alt={"Footballer and child"} />
              <div className="flex flex-col ">
                <div className="flex items-center w-full justify-between ">
                  <div className="flex items-center space-x-1 w-full">
                    <div className="font-bold">~ Ross Codes ~</div>
                    <div className="text-gray-500">@Grossthecoder</div>
                    <div className="text-gray-500"> <BsDot/></div>
                    <div className="text-gray-500">42 minutes ago</div>
                  </div>
                  <div className="text-gray-500"><BsThreeDots/></div>
                </div>
                <div className="text-white text-base ">{p.content}</div>
                <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mt-2">
                  <img src={`https://picsum.photos/id/3${i}/487/300`} alt={"Footballer and child"} />
                </div>
                <div className="flex items-center justify-between space-x-20 mt-4 w-full">
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><FaRegComment/>45</div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><FaRetweet/>87</div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><FaRegHeart/>99</div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><BiSolidBarChartAlt2/></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><FiShare/></div>
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
