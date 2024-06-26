import { Book } from '../nav/Book';
import { useState, useEffect } from 'react';

export const Nav = () => {
    const [bootcampBookTailwind, setBootcampBookTailwind] = useState('top-0 ltp:left-0')
    const [journalBookTailwind, setJournalBookTailwind] = useState('top-1/3 ltp:top-0 ltp:left-1/3')
    const [projectsBookTailwind, setProjectsBookTailwind] = useState('top-2/3 ltp:top-0 ltp:left-2/3')
    
    function handleClick(clicked) {
        if (clicked == 'Bootcamp') {
        // reorders Books so that the active page is bottom on mobile or right on laptop
        switch (bootcampBookTailwind) {
            case 'top-0 ltp:left-0':
            setBootcampBookTailwind('top-2/3 ltp:top-0 ltp:left-2/3')
            journalBookTailwind == 'top-2/3 ltp:top-0 ltp:left-2/3'
                ? setJournalBookTailwind('top-0 ltp:left-0')
                : setProjectsBookTailwind('top-0 ltp:left-0')
            break;
            case 'top-1/3 ltp:top-0 ltp:left-1/3':
            setBootcampBookTailwind('top-2/3 ltp:top-0 ltp:left-2/3')
            journalBookTailwind == 'top-2/3 ltp:top-0 ltp:left-2/3'
                ? setJournalBookTailwind('top-1/3 ltp:top-0 ltp:left-1/3')
                : setProjectsBookTailwind('top-1/3 ltp:top-0 ltp:left-1/3')
            break;
            default:
            break;
        }
        } else if (clicked == 'Journal') {

        switch (journalBookTailwind) {
            case 'top-0 ltp:left-0':
            setJournalBookTailwind('top-2/3 ltp:top-0 ltp:left-2/3')
            bootcampBookTailwind == 'top-2/3 ltp:top-0 ltp:left-2/3'
                ? setBootcampBookTailwind('top-0 ltp:left-0')
                : setProjectsBookTailwind('top-0 ltp:left-0')
            break;
            case 'top-1/3 ltp:top-0 ltp:left-1/3':
            setJournalBookTailwind('top-2/3 ltp:top-0 ltp:left-2/3')
            bootcampBookTailwind == 'top-2/3 ltp:top-0 ltp:left-2/3'
                ? setBootcampBookTailwind('top-1/3 ltp:top-0 ltp:left-1/3')
                : setProjectsBookTailwind('top-1/3 ltp:top-0 ltp:left-1/3')
            break;
            default:
            break;
        }
        } else if (clicked == 'Projects') {

        switch (projectsBookTailwind) {
            case 'top-0 ltp:left-0':
            setProjectsBookTailwind('top-2/3 ltp:top-0 ltp:left-2/3')
            bootcampBookTailwind == 'top-2/3 ltp:top-0 ltp:left-2/3'
                ? setBootcampBookTailwind('top-0 ltp:left-0')
                : setJournalBookTailwind('top-0 ltp:left-0')
            break;
            case 'top-1/3 ltp:top-0 ltp:left-1/3':
            setProjectsBookTailwind('top-2/3 ltp:top-0 ltp:left-2/3')
            bootcampBookTailwind == 'top-2/3 ltp:top-0 ltp:left-2/3'
                ? setBootcampBookTailwind('top-1/3 ltp:top-0 ltp:left-1/3')
                : setJournalBookTailwind('top-1/3 ltp:top-0 ltp:left-1/3')
            break;
            default:
            break;
        }
        }
    }
    return (
        <div className='flex flex-col relative h-24vh w-100% 
            ltp:fixed ltp:flex-row ltp:h-100vh ltp:left-0 ltp:border-r-4
            ltp:w-39% wide:w-30rem 4k:w-39rem'> 

            <Book
                name={'Bootcamp'}
                position={bootcampBookTailwind}
                id={'darkMagenta'}
                colour={'bg-dark-magenta'}
                colourPaled={'bg-dark-magenta-paled'}
                shadow={'shadow-spineCreaseDarkMagentaLeft'}
                shadowPaled={'shadow-spineCreaseDarkMagentaRight'}
                handleClick={handleClick}
            />
            <Book
                name={'Journal'}
                position={journalBookTailwind}
                id={'skyMagenta'}
                colour={'bg-sky-magenta'}
                colourPaled={'bg-sky-magenta-paled'}
                shadow={'shadow-spineCreaseSkyMagentaLeft'}
                shadowPaled={'shadow-spineCreaseSkyMagentaRight'}
                handleClick={handleClick}
            />
            <Book
                name={'Projects'}
                position={projectsBookTailwind}
                id={'teal'}
                colour={'bg-teal'}
                colourPaled={'bg-teal-paled'}
                shadow={'shadow-spineCreaseTealLeft'}
                shadowPaled={'shadow-spineCreaseTealRight'}
                handleClick={handleClick}
            />
        </div>
    )
}