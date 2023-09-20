import React from 'react'
import LeaderBoardCard from './LeaderBoardCard'
import { primary } from '../../colors'
function LeaderBoard() {
  return (
    <div className={`min-h-full max-w-fit gap-2 px-4 py-4 flex-col rounded-lg hidden lg:flex bg-[${primary}] lg:rounded-2xl`}>
        <p className="text-4xl w-full text-center uppercase">leaderboards</p>
        <div className="flex flex-col gap-2 pt-8 w-full">
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
            <LeaderBoardCard/>
        </div>
    </div>
  )
}

export default LeaderBoard