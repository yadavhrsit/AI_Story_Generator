import React from 'react'

function StoryCard() {
  return (
    <div className='w-full pb-4 bg-[#00000048] font-[magra] rounded-lg'>
        <div className='bg-[#4F709C] px-2 pb-2 rounded-t-md'>
            <p className='py-1 text-2xl uppercase font-semibold'>skylight city</p>
            <div className='flex gap-2'>
                <div className='rounded-full bg-white w-8 h-8 mt-1'/>
                <div className='flex flex-col text-sm'>
                    <p>Harshit Yadav</p>
                    <div className='flex gap-8'>
                        <p>17/06/23</p>
                        <p>12:23pm</p>
                    </div>    
                </div>
            </div>
        </div>
        <div className='flex gap-2 text-sm p-2'>
            <button className='capitalize bg-[#4F709C] px-1 rounded-sm'>humour</button>
            <button className='capitalize bg-[#4F709C] px-1 rounded-sm'>mystery</button>
        </div>
        <p className='px-2'>Experience the Skyward Wonder of Skylight City, Where Everyone Can Fly! Explore a world where the sky is your playground and discover the magic of low-altitude flight. </p>
        <div className='px-2 mt-4 flex justify-between items-center'>
            <p className='text-sm'>12 min read</p>
            <button className='capitalize bg-[#4F709C] px-2 rounded-[4px]'>read story</button>
            <div className='flex gap-2'>
                <button className='bg-[#4F709C] px-2 rounded-sm'>u</button>
                <button className='bg-[#4F709C] px-2 rounded-sm'>s</button>
            </div>
        </div>
    </div>
  )
}

export default StoryCard