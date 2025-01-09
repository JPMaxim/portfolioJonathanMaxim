import { Book } from '../nav/Book';
import { useState, useEffect } from 'react';
import gt from '../../images/greater-than.png'

export const Nav = () => {    

    const [about, setAbout] = useState(true)
    const [journal, setJournal] = useState(false)
    const [projects, setProjects] = useState(false)

    const [navTranslate, setNavTranslate] = useState('')
    const [expand, setExpand] = useState('hidden')

    function handleClick(clicked) {
        if (clicked == 'About') {
            setProjects(false)
            setAbout(true)
            setJournal(false)
        } else if (clicked == 'Journal') {
            setProjects(false)
            setAbout(false)
            setJournal(true)
        } else if (clicked == 'Projects') {
            setProjects(true)
            setAbout(false)
            setJournal(false)
        }
    }

    function handleMouseLeave() {
        setNavTranslate('lg:-translate-x-2/3')
        setExpand('lg:translate-x-100%')

        if (about) {
            document.getElementById('html').style.backgroundColor = 'rgb(252, 161, 253)'
        } else if (journal) {
            document.getElementById('html').style.backgroundColor = 'rgb(252, 216, 239)'
        } else if (projects) {
            document.getElementById('html').style.backgroundColor = '#B2D8D8'
        }

        let screen = window.matchMedia("(min-width: 1024px)")
        let main = document.getElementById('mainContainer')
        if (screen.matches) {
            main.style.width = '86%'
            main.style.marginLeft = '13%'
        } 
    }
    function handleMouseEnter() {
        setNavTranslate('')
        setExpand('lg:translate-x-0')
        
        let screen = window.matchMedia("(min-width: 1024px)")
        let main = document.getElementById('mainContainer')
        if (screen.matches) {
            main.style.width = '61%'
            main.style.marginLeft = '39%'
        } 
    }

    // changing from absolute position to conditional rendering
    if (about) return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`h-24vh w-100% relative lg:fixed lg:h-100vh lg:left-0 lg:w-39% ${navTranslate} lg:flex lg:flex-nowrap
        transition-translate delay-300 ease-in duration-500 overflow-visible`}> 

            {/* Expand sidebar icon */}
            <div id='expander' className={`hidden lg:block lg:absolute lg:top-50% lg:right-0 lg:-translate-y-50% ${expand} h-5rem w-1rem bg-gold border border-darkerGold rounded-tr-3xl rounded-br-3xl lg:flex lg:justify-center lg:items-center`}>
                <img src={gt}/>
            </div>

            <div className={``}>
                <Book
                    name={'Journal'}
                    id={'skyMagenta'}
                    colour={'bg-sky-magenta'}
                    colourPaled={'bg-sky-magenta-paled'}
                    shadow={'shadow-spineCreaseSkyMagentaLeft'}
                    shadowPaled={'shadow-spineCreaseSkyMagentaRight'}
                    handleClick={handleClick}

                />
            </div>
            <div className={``}>
                <Book
                    name={'Projects'}
                    id={'teal'}
                    colour={'bg-teal'}
                    colourPaled={'bg-teal-paled'}
                    shadow={'shadow-spineCreaseTealLeft'}
                    shadowPaled={'shadow-spineCreaseTealRight'}
                    handleClick={handleClick}
                />
            </div>
            <div className='sticky'>
                <Book
                    name={'About'}
                    id={'darkMagenta'}
                    colour={'bg-dark-magenta'}
                    colourPaled={'bg-dark-magenta-paled'}
                    shadow={'shadow-spineCreaseDarkMagentaLeft'}
                    shadowPaled={'shadow-spineCreaseDarkMagentaRight'}
                    handleClick={handleClick}
                />
            </div> 
        </div>
    )
    if (journal) return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`}h-24vh w-100% relative z-100 lg:fixed lg:h-100vh lg:left-0 lg:w-39% ${navTranslate} lg:flex lg:flex-nowrap
        transition-translate delay-300 ease-in duration-500`}> 

        {/* Expand sidebar icon */}
        <div id='expander' className={`${expand} -translate-y-50% absolute top-50% right-0 h-5rem w-1rem bg-gold border border-darkerGold rounded-tr-3xl rounded-br-3xl flex justify-center items-center`}>
            <img src={gt}/>
        </div>

            <div className={``}>
                <Book
                    name={'About'}
                    id={'darkMagenta'}
                    colour={'bg-dark-magenta'}
                    colourPaled={'bg-dark-magenta-paled'}
                    shadow={'shadow-spineCreaseDarkMagentaLeft'}
                    shadowPaled={'shadow-spineCreaseDarkMagentaRight'}
                    handleClick={handleClick}
                />
            </div>
            <div className={``}>
                <Book
                    name={'Projects'}
                    id={'teal'}
                    colour={'bg-teal'}
                    colourPaled={'bg-teal-paled'}
                    shadow={'shadow-spineCreaseTealLeft'}
                    shadowPaled={'shadow-spineCreaseTealRight'}
                    handleClick={handleClick}
                />
            </div>
            <div className='sticky'>
                <Book
                    name={'Journal'}
                    id={'skyMagenta'}
                    colour={'bg-sky-magenta'}
                    colourPaled={'bg-sky-magenta-paled'}
                    shadow={'shadow-spineCreaseSkyMagentaLeft'}
                    shadowPaled={'shadow-spineCreaseSkyMagentaRight'}
                    handleClick={handleClick}
                />
            </div> 
        </div>
    )
    if (projects || (!about && !journal)) return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`h-24vh w-100% relative z-100 lg:fixed lg:h-100vh lg:left-0 lg:w-39% ${navTranslate} lg:flex lg:flex-nowrap
        transition-translate delay-300 ease-in duration-500`}> 

        {/* Expand sidebar icon */}
        <div id='expander' className={`${expand} -translate-y-50% absolute top-50% right-0 h-5rem w-1rem bg-gold border border-darkerGold rounded-tr-3xl rounded-br-3xl flex justify-center items-center`}>
            <img src={gt}/>
        </div>

            <div className={``}>
                <Book
                    name={'About'}
                    id={'darkMagenta'}
                    colour={'bg-dark-magenta'}
                    colourPaled={'bg-dark-magenta-paled'}
                    shadow={'shadow-spineCreaseDarkMagentaLeft'}
                    shadowPaled={'shadow-spineCreaseDarkMagentaRight'}
                    handleClick={handleClick}
                />
            </div>
            <div className={``}>
                <Book
                    name={'Journal'}
                    id={'skyMagenta'}
                    colour={'bg-sky-magenta'}
                    colourPaled={'bg-sky-magenta-paled'}
                    shadow={'shadow-spineCreaseSkyMagentaLeft'}
                    shadowPaled={'shadow-spineCreaseSkyMagentaRight'}
                    handleClick={handleClick}
                />
            </div>
            <div className='sticky'>
                <Book
                    name={'Projects'}
                    id={'teal'}
                    colour={'bg-teal'}
                    colourPaled={'bg-teal-paled'}
                    shadow={'shadow-spineCreaseTealLeft'}
                    shadowPaled={'shadow-spineCreaseTealRight'}
                    handleClick={handleClick}
                />
            </div> 
        </div>
    )
}