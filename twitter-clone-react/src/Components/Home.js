import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSideBar from './LeftSideBar'
import RightSideSection from './RightSection'

function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative ">   
        <LeftSideBar />
        <Outlet />
        <RightSideSection />
      </div>
    </div>
  )
}

export default Home