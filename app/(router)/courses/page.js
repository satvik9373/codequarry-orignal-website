"use client"
import React from 'react'
import WelcomeBannner from './_components/WelcomeBannner'
import CourseList from './_components/CourseList'
import SideBanners from './_components/SideBanners'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
        {/*Left Container*/}
        <div className='col-span-3'>  
        {/*Banner*/}
        <WelcomeBannner/> 


        {/*Course List*/}
        <CourseList/>

        </div>
        {/*Right Container*/}
          <div>
<SideBanners/>
          </div>
    </div>
  )
}

export default Courses