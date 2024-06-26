import j from '../images/j.png'
import ornamental from '../images/ornamental-symmetrical-design.png'
export function Tab({ name, id, colour, colourPaled, shadow, shadowPaled }) {
    return (
        <div className={`relative flex justify-evenly w-100% h-8vh flex border border-red
        ltp:w-2/6 ltp:h-100%
        wide:w-52`}>
            {name}
        </div>
    )
}