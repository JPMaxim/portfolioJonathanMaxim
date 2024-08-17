import { useState } from "react"

export function JournalEntry({title, subtitle, caption, date}) {
    return (
        <div className="z-10 relative w-100% wide:w-75% h-30rem p-20px mb-3rem bg-white rounded shadow-jrnCardShadow flex justify-center">

            <div className="z-30 relative w-100% h-100% m-auto wide:w-90%">
                <div className="p-1rem h-100% w-100% flex flex-col items-center">
                    <h2 className="flex self-start font-bold font-Chakra">{date}</h2>
                    <h1 className="text-xl font-bold font-Chakra">{title}</h1>
                    <h2 className="font-Chakra">{subtitle}</h2>
                    <div className="h-1px bg-black w-90% m-5px"></div>
                    <div className="overflow-y-scroll">
                        {caption}
                    </div>
                </div>
            </div>            
        </div>
    )
}
