import j from '../../images/j.png'

export function AboutSection({title, caption}) {
    
    return (        
        <div className="flex-col justify-center items-center p-10 rounded-xl my-[1.5rem] bg-grey med:w-[600px] med:m-auto med:my-[50px]">
            <h2 className='text-3xl text-center text-dark-magenta font-bold'>{title}</h2>
            <div className="w-[85%] m-auto flex justify-between items-center my-[1rem]">
                <div className='w-[40%] h-[0.25rem] bg-black'></div>
                <img src={j} className='w-5'></img>
                <div className='w-[40%] h-[0.25rem] bg-black rounded-xl'></div>
            </div>
            <p>{caption}</p>
        </div>
    )
}
