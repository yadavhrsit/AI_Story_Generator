import React from 'react'
import { primary,secondary } from '../colors';
import { Link } from 'react-router-dom';
import StoryCard from '../components/story/StoryCard';
function StoriesPage() {
  return (
    <div className={`w-full min-h-full p-4 rounded-lg bg-[${primary}]`}>
      <div className='flex justify-between items-center'>
          <p className='text-[26px] sm:text-3xl'>Stories</p>
        <div className='flex gap-2 sm:gap-6 md:gap-24 sm:text-lg md:text-xl'>
          <p className={`py-2 px-3 bg-[${secondary}] rounded-md`}><Link to={'/home/mystories'}>My Stories</Link></p>
          <button className={`py-2 px-3 bg-[${secondary}] rounded-md`}>Add</button>
        </div>
      </div>
        <div className='flex gap-6 flex-wrap py-8'>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
        </div>
    </div>
  )
}

export default StoriesPage