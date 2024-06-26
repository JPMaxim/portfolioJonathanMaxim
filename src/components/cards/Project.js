import { useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

export function Project({title, caption, button, captionExpanded, img, link}) {
    const [captionExpandedTailwind, setCaptionExpandedTailwind] = useState('hidden')
    const [buttonText, setButtonText] = useState('Read More...')
    const [imgTailwind, setImgTailwind] = useState('w-85%')
    const [headingTailwind, setHeadingTailwind] = useState('right-5%')

    function handleExpand() {
        if (captionExpandedTailwind == 'hidden') {
        setCaptionExpandedTailwind('flex')
        setButtonText('show less')
        } else {
        setCaptionExpandedTailwind('hidden')
        setButtonText('Read More...') 
        }
    }
    function handleEnter() {
        setImgTailwind('w-90%')
        setHeadingTailwind('right-55%')
    }
    function handleLeave() {
        setImgTailwind('w-85%')
        setHeadingTailwind('right-5%')
    }

    let buttonTailwind = 'flex'
    if (button == null) { buttonTailwind = 'hidden' }
        // flex flex-col justify-evenly items-center
    return (
        <div className="z-10 relative w-100% wide:w-75% min-h-30rem p-20px mb-3rem bg-white rounded shadow-cardShadow flex justify-center">

            {/* <div className="z-20 absolute bottom-0 left-0 rounded-b w-0 h-0 border-t-15rem border-t-transparent border-b-15rem border-b-black border-l-15rem border-l-transparent border-r-15rem border-r-transparent bg-transparent "></div>  */}

            <div className="z-30 relative w-100% flex flex-col items-center wide:w-90%">
                <Link to={link} target="_blank" className="flex justify-center">
                    <div className={`${imgTailwind} relative transition-all duration-700 ease-in-out`}  onMouseEnter={() => handleEnter()} onMouseLeave={() => handleLeave()}>
                        <img src={img} className="w-full rounded shadow-cardShadow"></img>
                        <h1 className={`font-bold font-Chakra wide:text-2xl w-fit bg-teal p-5px rounded-lg translate-y-2/4 absolute bottom-0 ${headingTailwind} p-3px transition-all duration-500 ease-in-out`}>{title}</h1>
                    </div>             
                </Link>
                <p className="whitespace-pre-wrap w-85% mt-3rem">{caption}</p>
                <p className={`whitespace-pre-wrap ${captionExpandedTailwind}`}>{captionExpanded}</p>
                <button className={`${buttonTailwind} font-bold font-Chakra shadow-readMore mt-1rem bg-teal p-5px rounded-xl text-sm`} onClick={() => handleExpand()}>{buttonText}</button>
            </div>            
        </div>
 
        

    )
}
