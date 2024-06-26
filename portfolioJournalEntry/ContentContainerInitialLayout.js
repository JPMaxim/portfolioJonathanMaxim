import {JournalContent} from './JournalContent.js'
import {BootcampContent} from './BootcampContent.js'
import {ProjectsContent} from './ProjectsContent.js'

export function ContentContainer({ journal, projects, bootcamp }) {
    return (
        <div className='absolute w-100% mt-24vh min-h-76vh border border-black 
        ltp:w-61% ltp:ml-39% ltp:mt-0 ltp:min-h-100vh
        wide:w-100% wide:ml-0'>
            
            <JournalContent 
                display={journal}
            />
            <BootcampContent 
                display={bootcamp}
            />
            <ProjectsContent 
                display={projects}
            />
        </div >
    )
}