import {BsThreeDots} from 'react-icons/bs';
import {HiHashtag} from 'react-icons/hi';
import {FaBell} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {MdOutlinePortrait} from 'react-icons/md';
import {RiHome7Fill} from 'react-icons/ri';
import {ImTwitter} from 'react-icons/im';
import {PiSunBold} from 'react-icons/pi';
import {PiMoonBold} from 'react-icons/pi';


// import Link from 'next/link';

import React, {useState, useEffect } from 'react';
import { useStateContext } from '../contextProvider';


const NAV_ITEMS = [
  {
    title:'Twitter',
    icon:ImTwitter,
  },
  {
    title:'Home',
    icon:RiHome7Fill,
    href: '/'
  },
  {
    title:'Explore',
    icon:HiHashtag,
  },
  {
    title:'Notifications',
    icon:FaBell,
  },
  {
    title:'Messages',
    icon:FaEnvelope,
  },
  {
    title:'Bookmarks',
    icon:BsFillBookmarkFill,
  },
  {
    title:'Profile',
    icon:MdOutlinePortrait,
    href: '/Profile'
  },
  {
    title:'Light/Dark',
    icon:PiSunBold,
  },

];



 //  useEffect(() => {
    // fetch(`${server}/users`).then(res => res.json()).then(data => setUsername(data[0].username))
 // }, [])

  const LeftSideBar = () => {
  return (
    <section className='sticky top-0 w-[23%] flex flex-col h-screen px-4 '>
        <div className="sidebar flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAV_ITEMS.map((item) => (
                <a
                className="hover:bg-white/10 light:bg-slate-800 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4
                rounded-3xl py-2 px-6"
                 href={item.href}
                  key={item.title}>
                    <div>
                        <item.icon />
                    </div>
                    <div>
                        {item.title !== "Twitter" && <div>{item.title}</div>}
                    </div>
                </a>
            ))}
        <button className='rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
            Peck
        </button>

        

        </div>
        <button className="left_btn rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 light:bg-slate-800
         transition duration-200 w-full">

            <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 light:bg-white/10 w-10 h-10"></div>
            <div className="text-left text-sm">
                <div className="font-semibold">Tech Talent Academy</div>
                <div className=""> @TechtalentTeam1 </div>
            </div> 
            </div>
            <div>
                <BsThreeDots/>
            </div>
        </button>

    </section>
 
  )
}



export default LeftSideBar;
