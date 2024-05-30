import img1 from './images/johana3.jpeg'
import BoltIcon from '@mui/icons-material/Bolt';
function Section1() {
    return (

        < div className="lg:flex lg:flex-row flex-col justify-between lg:m-10 mt-10 lg:p-10  text-slate-400 items-start gap-5" >
            <div>
                <div className="text-slate-400 mb-10">
                    <span className="flex flex-row justify-between items-center lg:gap-10 gap-4 text-3xl text-slate-300"><h1 ><span className="text-teal-400">01.</span>About Me</h1><div className="lg:w-60 bg-slate-400  h-0.5"></div></span>
                </div>
                <div className="text-xl">
                    <p>Hello! My name is Johana Gikonyo .I`m an ardent tech enthusiast from Nairobi Kenya, driven by an insatiable curiosity for all things digital.
                        Technology, to me, is like a canvas of endless creativity waiting to be explored.
                        I thrive on the challenges tech presents and am committed to pushing boundaries and crafting a future where innovation knows no bounds.
                    </p>
                </div>
                <div className='text-xl mt-5'><p>I hold a Bachelor`s degree in Mathematics and Computer Science from <span className='text-teal-400'>Multimedia University of Kenya</span> .</p></div>
                <div className='text-xl mt-5'><p>I major in Website development with proficiency in the following technologies and tools:</p></div>
                <div className='text-xl mt-5 lg:flex items-center gap-1'><h1 className='text-xl  font-extrabold'>Programming Languages: </h1>I have much grasp of <span className='text-teal-400'>JavaScript </span> and  <span className='text-teal-400'>Typescript</span></div>
                <div className='text-xl mt-5 lg:flex items-center gap-1'><h1 className='text-xl  font-extrabold'>Front-end FrameWorks:</h1>I majorly Use <span className='text-teal-400'>React js</span></div>
                <div className='text-xl mt-5 lg:flex items-center gap-1'><h1 className='text-xl  font-extrabold'>Backend FrameWorks:</h1>I have majorly Used <span className='text-teal-400'>Prisma</span> and <span className='text-teal-400'>Express</span></div>
                <div className='text-xl mt-5 lg:flex items-center gap-1'><h1 className='text-xl  font-extrabold'>Databases:</h1><span className='text-teal-400'>PostgreSql</span> and <span className='text-teal-400'> Mongodb</span></div>
                <div className='text-xl mt-5'><p>Also I have Used...</p>
                    <ul className='flex gap-5'>
                        <div>
                            <li><span><BoltIcon className="text-teal-400" /></span>MUI</li>
                            <li><span><BoltIcon className="text-teal-400" /></span>Tailwind</li>
                        </div>
                        <div>
                            <li><span><BoltIcon className="text-teal-400" /></span>React Native</li>
                            <li><span><BoltIcon className="text-teal-400" /></span>Git & Github</li>
                        </div>
                    </ul>
                </div>

            </div>
            <div className='border border-s-4 m-5 border-teal-400 p-2 rounded-md hover:'>
                <img src={img1} className='rounded-md -translate-x-4 -translate-y-3 opacity-90 hover:opacity-100 hover:-translate-x-3 hover:-translate-y-3' />
            </div>
        </ div>
    )
}

export default Section1