import { Button } from '@/components/ui/button'
import React from 'react'

function CourseEnrollSection() {
  const membership = true;
  return (
    <div className='p-3 text-center rounded-sm bg-primary'>
      <h2 className='text-[22px] font-bold text-white'>
        Enroll To The Course</h2>

      {/* User has membership  and already login  */}
      {membership ? (
        <div className=' flex flex-col gap-3 mt-3'>
          <h2 className='text-white font-light'>Enroll Now to Start Learning</h2>
          <Button className='bg-white text-primary hover:bg-white hover:text-primary '>Enroll Now</Button>
        </div>
      ) : (
        /* User does not have membership or not login  */
        <div className=' flex flex-col gap-3 mt-3'>
          <h2 className='text-white font-light'>Buy Our And Get Access to All Lectures and Other Study Matherials</h2>
          <Button className='bg-white text-primary hover:bg-white hover:text-primary '>Buy Now</Button>
        </div>

      )}
    </div>
  )
}

export default CourseEnrollSection