import { useState } from 'react'
import {JournalEntry} from '../cards/JournalEntry'
import { ChessStats01 } from '../text/journalCaptions/august24/ChessStats01'
import { ChessStats02 } from '../text/journalCaptions/august24/ChessStats02'
import { ChessStats03 } from '../text/journalCaptions/august24/ChessStats03'
import { PythonListComprehension } from '../text/journalCaptions/sept24/PythonListComprehension'
import { CsharpIntro } from '../text/journalCaptions/nov24/CsharpIntro'
import { CwBilliards } from '../text/journalCaptions/dec24/CwBilliards'
import { CwSwitchOverRange } from '../text/journalCaptions/dec24/CwSwitchOverRange'
import { OrderByHeight } from '../text/journalCaptions/dec24/OrderByHeight'
import sdhOldArr from '../../images/sbhOldArr.png'
import sdhNewArr from '../../images/sbhNewArr.png'
import sdhNewMap from '../../images/sbhNewMap.png'
import sdhOldMap from '../../images/sbhOldMap.png'
import pong from '../../video/pong.mp4'
import orderByHeightVideo from '../../video/orderByHeight.mp4'

export function Journal({ display }) {

    const [activeNav, setActiveNav] = useState(0)
    const [language, setLanguage] = useState(0)
    let jsCodewarsScore = 0
    let pyCodewarsScore = 0
    let cSharpCodewarsScore = 0

    return (
        <div className={`w-100% ${display} bg-lighterMagenta min-h-76vh
        lg:min-h-100vh`}>
            <div className="w-full px-8 flex flex-col items-center justify-evenly
            ltp:px-16
            wide:px-32">
                {/* title */}
                <h1 className="font-Chakra my-3rem text-5xl wide:text-6xl 4k:text-7xl">Journal</h1>
                {/* navigation */}
                <div className='font-rokkitt font-light italic w-full h-8vh flex flex-row py-3 mb-8 text-xs bg-lighterMagenta sticky top-0 z-20 shadow-stickyNav
                ltp:text-sm
                wide:text-lg
                4k:text-3xl' >
                    <div className='h-100% w-25% flex justify-center border-r border-black p-1' onClick={() => setActiveNav(0)}>
                        <div className={`h-100% text-center flex justify-center items-center transition hover:scale-105 duration-400 ${((0 == activeNav) ? 'shadow-active' : '')}`}>MOST RECENT</div>
                    </div>
                    <div className='h-100% w-25% flex justify-center border-r border-black p-1' onClick={() => setActiveNav(1)}>
                        <div className={`h-100% text-center flex justify-center items-center  transition hover:scale-105 duration-400 ${((1 == activeNav) ? 'shadow-active' : '')}`}>LEARNING</div>
                    </div>
                    <div className='h-100% w-25% flex justify-center border-r border-black p-1' onClick={() => setActiveNav(2)}>
                        <div className={`h-100% text-center flex justify-center items-center  transition hover:scale-105 duration-400 ${((2 == activeNav) ? 'shadow-active' : '')}`}>TRAINING</div>
                    </div>
                    <div className='h-100% w-25% flex justify-center p-1' onClick={() => setActiveNav(3)}>
                        <div className={`h-100% text-center flex justify-center items-center  transition hover:scale-105 duration-400 ${((3 == activeNav) ? 'shadow-active' : '')}`}>CREATING</div>
                    </div>
                </div>
                {/* Codewars Widget */}
                <div id='codewars' className={`${(2 == activeNav) ? 'z-10 relative w-100% wide:w-75% h-10rem p-10px mb-3rem border-2 border-black rounded' : 'hidden'}`}>
                    <div className='w-full h-25% flex'>
                        <div onClick={() => setLanguage(0)} className={`font-rokkitt w-1/3 flex flex-col justify-center items-center hover:font-medium`}>
                            <div className=''>JS</div>
                            <div className={`text-xs text-center min-w-30% ${language == 0 ? 'shadow-active' : ''}`}>{jsCodewarsScore} pts</div>
                        </div>
                        <div onClick={() => setLanguage(1)} className={`font-rokkitt w-1/3 flex flex-col justify-center items-center hover:font-medium border-x border-black`}>
                            <div className=''>PY</div>
                            <div className={`text-xs text-center min-w-30% ${language == 1 ? 'shadow-active' : ''}`}>{pyCodewarsScore} pts</div>
                        </div>
                        <div onClick={() => setLanguage(2)} className={`font-rokkitt w-1/3 flex flex-col justify-center items-center hover:font-medium`}>
                            <div className=''>C#</div>
                            <div className={`text-xs text-center min-w-30% ${language == 2 ? 'shadow-active' : ''}`}>{cSharpCodewarsScore} pts</div>
                        </div>
                    </div> 
                    <div className='w-full h-75% flex flex-wrap'>
                        <div className='bg-teal w-20% h-100%'></div>
                        <div className='bg-gold w-80% h-50%'></div>
                        <div className='bg-grey w-80% h-50%'></div>
                    </div>
                </div>
                {/* entries */} 
                <div className='flex max-w-100% flex-wrap'>
                    {/* MOST RECENT - TOP TO BOTTOM */}
                    <JournalEntry
                        title='Codewars - Javascript'
                        subtitle='Using Array Methods Better'
                        caption={<OrderByHeight 
                            a = {sdhOldArr}
                            b = {sdhNewArr}
                            c = {sdhOldMap}
                            d = {sdhNewMap}
                        />}
                        active={(activeNav == 0 || activeNav == 2) ? true : false}
                        date='December 2024'
                        video={orderByHeightVideo}
                    />
                    <JournalEntry
                        title='Codewars - Javascript'
                        subtitle='Classes & Switching over a range'
                        caption={<CwSwitchOverRange />}
                        active={(activeNav == 0 || activeNav == 2) ? true : false}
                        date='December 2024'
                        video={pong}
                    />
                    <JournalEntry
                        title='Codewars - Javascript'
                        subtitle='A good application of the Set object'
                        caption={<CwBilliards />}
                        active={(activeNav == 0 || activeNav == 2) ? true : false}
                        date='December 2024'
                    />
                    <JournalEntry
                        title='C# Introduction Course'
                        subtitle='C# fundamentals'
                        caption={<CsharpIntro />}
                        active={(activeNav == 0 || activeNav == 1) ? true : false}
                        date='November 2024'
                    />
                    <JournalEntry 
                        title='Python Practice'
                        subtitle='List Comprehenstion'
                        caption={<PythonListComprehension />}
                        date='September 2024'
                        active={(activeNav == 0 || activeNav == 2) ? true : false}
                    />
                    <JournalEntry 
                        title='Chess Stats FullStack - Entry 01'
                        subtitle='Design And Bulding the Backend Server'
                        caption={<ChessStats01 />}
                        active={(activeNav == 0 || activeNav == 3) ? true : false}
                        date='August 2024'
                    />
                    <JournalEntry
                        title='Chess Stats FullStack - Entry 02'
                        subtitle='Making a Start on the Frontend'
                        caption={<ChessStats02 />}
                        active={(activeNav == 0 || activeNav == 3) ? true : false}
                        date='August 2024'
                    />
                    <JournalEntry
                        title='Chess Stats FullStack - Entry 03'
                        subtitle='The Import Game Page'
                        caption={<ChessStats03 />}
                        active={(activeNav == 0 || activeNav == 3) ? true : false}
                        date='August 2024'
                    />
                </div>
            </div>
        </div>
    )
}