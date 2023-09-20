import React from 'react'
import { primary,secondary } from '../../colors'
function LeaderBoardCard() {
  return (
    <div className={`p-2 w-full flex gap-2 justify-between font-[magra] bg-[${secondary}] rounded-md`}>
        <div className='flex flex-col gap-1 w-full'>
            <p className='text-lg h-fit w-fit uppercase'>Skylight city</p>
            <div className='flex gap-2 w-full text-xs'>
                <div className='bg-white rounded-full w-[30px] h-[30px]'/>
                <div className='flex w-fit max-w-[80%] flex-col'>
                    <p className='uppercase w-fit text-center'>Harshit Yadav</p>
                    <p className='uppercase w-fit text-left'>12/07/23</p>
                </div>
                <button className={`capitalize bg-[${primary}] ml-auto px-2 py-1 rounded-[4px] w-fit`}>12 +</button>
            </div>
        </div>
        
        {/* <p className='text-2xl h-fit max-w-[60%] w-fit uppercase'>Skylight city</p>
        <div className='max-w-[40%] w-fit flex flex-col gap-1'>
            <div className='flex gap-1'>
                <p className='uppercase w-fit text-right'>Harshit Yadav</p>
                <div className='bg-white rounded-full w-[30px] h-[30px]'/>
            </div>
            <p className='uppercase pr-[30px] text-right'>12/07/23</p>
        </div>
        <div className='flex justify-between w-full'>
            <div className='flex gap-1 text-sm'>
                <button className={`capitalize bg-[${primary}] px-2 py-1 rounded-[4px]`}>humour</button>
                <button className={`capitalize bg-[${primary}] px-2 py-1 rounded-[4px]`}>mystery</button>
                <button className={`capitalize bg-[${primary}] px-2 py-1 rounded-[4px]`}>mystery</button>
            </div>
            <button className={`capitalize bg-[${primary}] px-2 py-1 rounded-[4px]`}>12 +</button>
        </div> */}
    </div>
  )
}

export default LeaderBoardCard