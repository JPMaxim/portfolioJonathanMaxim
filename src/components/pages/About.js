import { Link } from "react-router-dom"
import {AboutSection} from '../cards/AboutSection'

export function About({ display }) {
    return (

        <div className={`w-100% overflow-clip ${display} bg-lightMagenta min-h-76vh
        lg:min-h-100vh`}>             
            <div className="w-full px-8 flex flex-col items-center justify-evenly
            ltp:px-16
            wide:px-32
            4k:px-80">
                <h1 className="font-Chakra my-3rem text-5xl wide:text-6xl 4k:text-7xl">About Me</h1>

                {/* Brief Professional Introduction */}
                <AboutSection 
                    title="Hi, I'm Jonathan Maxim "
                    caption="I'm a software developer with a passion for building clean, scalable, and user-friendly applications. My background is in full-stack development using the MERN stack, taught by industry professionals through a Growth Company Software developer bootcamp."
                />

                {/* Core Skills & Technologies */}
                <AboutSection 
                    title="My Skills"
                    caption="I've developed skills in Javascript, C#, and Python, MERN full-stack apps, and communication & teamwork. Learning through my time in a developer bootcamp as well as in my personal learning and projects. I'm enthusiastic to learn more of best practices, to gain experience in the industry, and to grow professionally under the guidance of experienced developers."
                />

                {/* Portfolio and Journal Links */}
                <div class="flex gap-8 p-6">

                    <div class="flex flex-col flex-1 p-4">
                        <h2 class="text-2xl font-bold mb-4">PROJECTS</h2>
                        <ul class="flex flex-col gap-2">
                        <li>Portfolio Website</li>
                        <li>MERN Full Stack App</li>
                        <li>API React App</li>
                        <li>Node.js Inquirer</li>
                        <li>Catan Generator App</li>
                        </ul>
                        <Link to='/journal'>
                            <button class="mt-4 self-start text-blue-600 font-semibold flex items-center gap-1 hover:underline">
                            Projects <span>&gt;</span>
                            </button>
                        </Link>
                        
                    </div>

                    <div class="flex flex-col flex-1 p-4">
                        <h2 class="text-2xl font-bold mb-4">JOURNAL</h2>
                        <ul class="flex flex-col gap-2">
                        <li>Codewars</li>
                        <li>Courses</li>
                        <li>Project Notes</li>
                        <li>Code Analysis Videos</li>
                        </ul>
                        <Link to='/journal'>
                            <button class="mt-4 self-start text-blue-600 font-semibold flex items-center gap-1 hover:underline">
                            Journal <span>&gt;</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}