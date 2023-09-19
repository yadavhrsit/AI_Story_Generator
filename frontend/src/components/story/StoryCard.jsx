import React from 'react'
import { secondary } from '../../colors';

function StoryCard() {
  return (
    <div className='w-full pb-4 bg-[#00000048] font-[magra] rounded-lg md:max-w-[49%]'>
        <div className='md:flex md:justify-between md:w-full'>
            <div className={`bg-[${secondary}] px-2 pb-2 rounded-t-md md:w-fit md:px-6 md:pb-0 md:h-fit`}>
                <p className='py-1 text-2xl uppercase font-semibold'>skylight city</p>
                <div className='flex gap-2 md:hidden'>
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
            <div className='flex-col gap-1 hidden md:flex pt-2 pr-2'>
                <div className='flex gap-3'>
                    <div className='flex flex-col items-end'>
                        <p>Harshit Yadav</p>
                        <div className='flex gap-1'>
                            <p>17/06/23</p>
                            <p>12:33pm</p>
                        </div>
                    </div>
                    <div className='rounded-full w-10 h-10 bg-white'/>
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