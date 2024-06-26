import { Project } from "../cards/Project"
import { captions } from "../../text/projectCaptions"
import catanGenerator from '../../images/catanGenerator.png'
import catanGeneratorTwo from '../../images/catanGeneratorTwo.png'
import restaurant from '../../images/restaurant.png'
import pokemon from '../../images/pokemon.png'
import climbing from '../../images/climbing.png'
import bootcampJournal from '../../images/bootcampJournal.png'


export function Projects({ display }) {
    return (
        <div className={`w-100% ${display} 
        wide:pl-30rem
        4k:pl-39rem`}>
            <div className="w-full px-8 flex flex-col items-center justify-evenly
            ltp:px-16
            wide:px-32
            4k:px-80">

            <h1 className="font-Chakra my-3rem text-5xl wide:text-6xl 4k:text-7xl">Projects</h1>

            <Project 
                title='Full Stack Restaurant Site'
                caption={captions.restaurant}
                button={true}
                captionExpanded={captions.restaurantExpanded}
                img={restaurant}
                link={'https://github.com/JPMaxim/fullStackRestaurantApp'}
            />

            <Project 
                title='Catan Generator'
                caption={captions.catanGenerator}
                button={null}
                captionExpanded={null}
                img={catanGenerator}
                link={'https://jpmaxim.github.io/catanGenerator/'}
            />

            <Project 
                title='Pokemon Api Project'
                caption={captions.pokemon}
                button={null}
                captionExpanded={null}
                img={pokemon}
                link={'https://jpmaxim.github.io/pokemonAPI/'}
            />

            <Project 
                title='First HTML Website'
                caption={captions.climbing}
                button={null}
                captionExpanded={null}
                img={climbing}
                link={'https://jpmaxim.github.io/manchesterClimbingCommunity/'}
            />

            <Project 
                title='Bootcamp Journal Site'
                caption={captions.bootcampJournal}
                button={null}
                captionExpanded={null}
                img={bootcampJournal}
                link={'https://jpmaxim.github.io/journalWebsite/'}
            />
            </div>
        </div>
    )
}