import j from '../images/j.png'
import ornamental from '../images/ornamental-symmetrical-design.png'
export function TabCopy({ name, position, id, colour, colourPaled, shadow, shadowPaled, handleClick }) {
    return (
        <div onClick={() => handleClick(name)} id={id} className={`absolute ${position} flex justify-evenly w-100% h-8vh flex
            ltp:w-2/6 ltp:h-100%
            wide:w-52`}>
            <div className={`absolute left-8px h-full w-4% ${colour} ${shadow}`}></div>

            <div className='h-100% w-70% flex flex-col items-center justify-evenly'>

                <img src={j} className='max-h-5%' />

                <div className='flex flex-col justify-around'>
                    <p className='text-center leading-none'>PORTFOLIO</p>
                    <p className='text-center leading-tight'>JONATHAN MAXIM</p>
                </div>

                <div className='h-0.5% w-100% bg-black'></div>

                <div className="w-100% min-h-65% flex items-stretch justify-center">
                    <p id='tabTitle' className='flex flex-col justify-center text-black text-center ltp:text-7xl wide:text-8xl'>{name}</p>
                </div>

                <div className='h-0.5% w-100% bg-black'></div>

                <img src={ornamental} className='max-w-70%' />

            </div>

            <div className={`absolute right-8px h-full w-4% ${colourPaled} ${shadowPaled}`}></div>
        </div>
    )
}