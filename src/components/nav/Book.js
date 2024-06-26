import j from '../../images/j.png'
import ornamental from '../../images/ornamental-symmetrical-design.png'
import { Link } from 'react-router-dom'
export function Book({ name, position, id, colour, colourPaled, shadow, shadowPaled, handleClick }) {
    let href = '/' + name.toLowerCase()
    return (
        <Link to={href}>
            <div onClick={() => handleClick(name)} id={id} className={`absolute ${position} flex flex-col justify-evenly w-100% h-8vh font-Chakra
                ltp:flex-row ltp:w-2/6 ltp:h-100%
                wide:w-40
                4k:w-52`}>
                <div className={`absolute top-3px ltp:top-0 ltp:left-8px h-4% ltp:h-full w-100% ltp:w-4% ${colour} ${shadow}`}></div>

                <div className='h-70% w-100% ltp:h-100% ltp:w-70% flex flex-nowrap ltp:flex-col items-center justify-evenly'>

                    <img src={j} className='max-h-75% ltp:max-h-5% -rotate-90 ltp:rotate-0' />

                    <div className='flex flex-col justify-around'>
                        <p className='text-xs ltp:text-base text-center leading-none'>PORTFOLIO</p>
                        <p className='text-xs ltp:text-base text-center leading-tight'>JONATHAN MAXIM</p>
                    </div>

                    <div className='h-100% w-0.5% ltp:h-0.5% ltp:w-100% bg-black'></div>

                    <div className="h-100% w-65% ltp:w-100% ltp:h-65% flex ltp:items-stretch justify-center">
                        <p id='tabTitle' className='flex flex-col justify-center text-black text-center text-3xl ltp:text-7xl wide:text-8xl'>{name}</p>
                    </div>

                    <div className='h-100% w-0.5% ltp:h-0.5% ltp:w-100% bg-black'></div>

                    <img src={ornamental} className='max-w-5% rotate-90 ltp:max-w-70% ltp:rotate-0'/>

                </div>
                <div className={`absolute bottom-3px ltp:bottom-0 ltp:right-8px h-4% ltp:h-full w-100% ltp:w-4% ${colourPaled} ${shadowPaled}`}></div>
            </div>
        </Link>
        
    )
}