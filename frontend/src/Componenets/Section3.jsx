import img1 from './images/e-commerce.png'
import img2 from './images/cluster.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; function Section3() {
    return (
        <div className="text-slate-400 ml-5 ">
            <div >
                <span className="flex items-center gap-4 mt-10 text-3xl text-slate-300">
                    <h1 className='flex'><span className="text-teal-400">03.</span>My Projects</h1>
                    <div className="lg:w-60 w-40 bg-slate-400 h-0.5"></div>
                </span>
            </div>
            <div className='flex lg:flex-row flex-col items-center  justify-around'>
                <div className='relative flex flex-col gap-0'>
                    <a href="https://mule-foods.vercel.app/">  <img src={img1} alt="" className='h-60  w-80 object-contain rounded-lg p-2' /></a>
                    <div className='bg-slate-300 text-black rounded-lg p-2 absolute top-[75%] lg:top-20 lg:left-[50%] lg:right-[-50%]  flex flex-col'>

                        <p>Mule Foods is an e-commerce Website, where clients can order their Food items from their desired Location.
                            It makes ordering easier than a phone call.I have participated as a developer, and I have been maintaining it.
                        </p>
                        <div className='flex justify-end'>
                            <a href='https://github.com/JohanaGikonyo/Mule-Foods'><GitHubIcon /></a>

                            <span><a href="https://mule-foods.vercel.app/"><OpenInNewIcon /></a></span></div>
                    </div>
                </div>
                <div className='relative mt-16 lg:mt-0'>
                    <div className=''>
                        <a href='https://clustercalculator.vercel.app/'> <img src={img2} alt="" className='h-80 w-80 object-contain rounded-lg p-2 ' /></a>
                    </div>
                    <div className='bg-slate-300 text-black rounded-lg p-2 absolute lg:top-40 top-[65%] lg:left-[5%] lg:right-[-25%]'>



                        <p>
                            This is a cluster point calculator, helping students joining higher education levels, to easily calculate and know their cluster points for easier selection of courses.
                        </p>
                        <div className='flex justify-end items-center m-0.5'>
                            <a href='https://github.com/JohanaGikonyo/clusterCalculations2024'><GitHubIcon /></a>
                            <span> <a href='https://clustercalculator.vercel.app/'> <OpenInNewIcon /> </a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section3