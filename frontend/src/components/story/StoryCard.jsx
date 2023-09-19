import React from 'react'
import { secondary } from '../../colors';

function StoryCard() {
  return (
    <div className='w-full pb-4 bg-[#00000048] font-[magra] rounded-lg'>
        <div className={`bg-[${secondary}] px-2 pb-2 rounded-t-md`}>
            <p className='py-1 text-2xl uppercase font-semibold'>skylight city</p>
            <div className='flex gap-2'>
                <div className='rounded-full bg-white w-[35px] h-[35px] mt-1'/>
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
            <button className={`capitalize bg-[${secondary}] px-2 py-1 rounded-[4px]`}>humour</button>
            <button className={`capitalize bg-[${secondary}] px-2 py-1 rounded-[4px]`}>mystery</button>
        </div>
        <p className='px-2'>Experience the Skyward Wonder of Skylight City, Where Everyone Can Fly! Explore a world where the sky is your playground and discover the magic of low-altitude flight. </p>
        <div className='px-2 mt-4 flex justify-between items-center'>
            <p className='text-sm'>12 min read</p>
            <button className={`capitalize bg-[${secondary}] px-3 py-[2px] rounded-[5px]`}>read story</button>
            <div className='flex gap-2'>
                <button className={`bg-[${secondary}] px-2 rounded-sm pb-[3px]`}>u</button>
                <button className={`bg-[${secondary}] px-2 rounded-sm pb-[3px]`}>s</button>
            </div>
        </div>
    </div>
  )
}

export default StoryCard