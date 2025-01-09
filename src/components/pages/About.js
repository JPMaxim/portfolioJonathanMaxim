import { Link } from "react-router-dom"

export function About({ display }) {
    return (

        <div className={`w-100% overflow-clip ${display} bg-lightMagenta min-h-76vh
        lg:min-h-100vh`}>             
            <div className="w-full px-8 flex flex-col items-center justify-evenly
            ltp:px-16
            wide:px-32
            4k:px-80">
                <h1 className="font-Chakra my-3rem text-5xl wide:text-6xl 4k:text-7xl">About Me</h1>
                <p className="text-center">Content coming soon!<br />See <Link className="text-darkerGold font-bold" to='/journal'>Journal</Link> and <Link className="text-darkerGold font-bold" to='/projects'>Projects</Link> </p>
            </div>
        </div>
    )
}