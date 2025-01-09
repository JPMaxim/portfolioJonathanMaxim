export function JournalEntry({title, subtitle, caption, date, active, video}) {

    function renderVideo() {
        if (video) return (
            <div className='w-100% overflow-hidden mb-1rem'>
                <video className='w-100% max-h-100%' controls src={video} type='video/mp4' />
            </div>
        )
    }
    return (
        <div className={`${(active === false ? 'hidden' : 'z-10 relative w-100% h-30rem m-1rem mb-3rem bg-white rounded shadow-jrnCardShadow flex justify-center overflow-hidden  med:w-45% lg:w-30% lg:m-0.5rem')}  `}>
            <div className="p-1rem h-100% w-100% flex flex-col items-center overflow-hidden">

                <h2 className="flex self-start font-bold font-Chakra text-xs">{date}</h2>
                <h1 className="text-lg sm:text-xl font-bold font-Chakra mt-0.5rem text-center">{title}</h1>
                <h2 className="text-sm sm:text-base font-Chakra text-center">{subtitle}</h2>
                <div className="h-1px bg-black w-90% m-5px pb-1px"></div>

                <div className="w-100% h-auto flex flex-col items-center nowrap pt-1rem overflow-hidden">
                    {/* video */}
                    {renderVideo()}
                    {/* text */}
                    <div className="w-100% h-100% overflow-y-scroll text-sm sm:text-base">
                        {caption}
                    </div>
                </div>
            </div>            
        </div>
    )
}
