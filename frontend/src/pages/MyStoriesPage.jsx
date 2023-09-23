import React from 'react'
import { primary,secondary } from '../colors';
import { Link } from 'react-router-dom';
function MyStoriesPage() {
  return (
    <div className={`w-full min-h-full p-4 rounded-lg bg-[${primary}]`}>
      <div className='flex justify-between items-center'>
          <p className='text-[26px] sm:text-3xl'>My Stories</p>
          <div className="flex gap-2 sm:gap-6 md:gap-24 sm:text-lg md:text-2xl md:tracking-wider font-[magra]">
            <p className='py-2 px-3 bg-[#4F709C] rounded-md'><Link to={'/home/stories'}>Stories</Link></p>
            <button className='py-2 px-3 bg-[#4F709C] rounded-md'>Add</button>
          </div>
      </div>
    </div>
  )
}

export default MyStoriesPage