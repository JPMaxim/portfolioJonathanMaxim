import {JournalEntry} from '../cards/JournalEntry'
import { ChessStats01 } from '../text/journalCaptions/august24/ChessStats01'
import { ChessStats02 } from '../text/journalCaptions/august24/ChessStats02'
import { ChessStats03 } from '../text/journalCaptions/august24/ChessStats03'
import { PythonListComprehension } from '../text/journalCaptions/sept24/PythonListComprehension'

export function Journal({ display }) {
    return (
        <div className={`w-100% ${display} bg-lighterMagenta min-h-76vh
        ltp:min-h-100vh
        wide:pl-30rem
        4k:pl-39rem`}>
            <div className="w-full px-8 flex flex-col items-center justify-evenly
            ltp:px-16
            wide:px-32
            4k:px-80">
                <h1 className="font-Chakra my-3rem text-5xl wide:text-6xl 4k:text-7xl">Journal</h1>
                <JournalEntry 
                    title='Python Practice'
                    subtitle='List Comprehenstion'
                    caption={<PythonListComprehension />}
                    date='September 2024'
                />
                <JournalEntry 
                    title='Chess Stats FullStack - Entry 01'
                    subtitle='Design And Bulding the Backend Server'
                    caption={<ChessStats01 />}
                    date='August 2024'
                />
                <JournalEntry
                    title='Chess Stats FullStack - Entry 02'
                    subtitle='Making a Start on the Frontend'
                    caption={<ChessStats02 />}
                    date='August 2024'
                />
                <JournalEntry
                    title='Chess Stats FullStack - Entry 03'
                    subtitle='The Import Game Page'
                    caption={<ChessStats03 />}
                    date='August 2024'
                />
            </div>
        </div>
    )
}