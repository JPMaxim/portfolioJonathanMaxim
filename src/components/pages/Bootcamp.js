export function Bootcamp({ display }) {
    return (
        <div className={`w-100% ${display} bg-lightMagenta min-h-76vh
        ltp:min-h-100vh
        wide:pl-39rem`}>
            <div className="w-full px-8 flex flex-col items-center justify-center
            ltp:px-16
            wide:px-32
            4k:px-80">                
                <div className="w-full px-8 flex flex-col items-center justify-evenly
                ltp:px-16
                wide:px-32
                4k:px-80">
                    <h1 className="font-Chakra my-3rem text-5xl wide:text-6xl 4k:text-7xl">Bootcamp</h1>
                </div>
            </div>
        </div>
    )
}