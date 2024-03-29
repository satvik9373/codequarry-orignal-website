"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseEnrollSection from '../../courses/_components/CourseEnrollSection'
import CourseContentSection from './_components/CourseContentSection'

function CoursePreview({params}) {
    const [courseInfo,setCourseInfo]=useState();
    useEffect(()=>{
        params&&getCourseInfoById();
    },[params])

    /**
     used to get course info by slug name 
     */
    const getCourseInfoById=()=>{
        GlobalApi.getCourseById(params?.courseId).then(resp=>{
            setCourseInfo(resp?.courseList)
        })
    }
    
  return courseInfo&&(
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/*title video description */}
<div className='col-span-2 bg-white p-3'>
    <CourseVideoDescription  courseInfo={courseInfo}/>

</div>

      {/*course content*/}
<div>
<CourseEnrollSection/>
<CourseContentSection courseInfo={courseInfo}/>
</div>
    </div>
  )
}

export default CoursePreview