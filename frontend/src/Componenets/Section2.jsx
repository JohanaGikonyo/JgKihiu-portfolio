import { useState } from 'react';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
function Section2() {
    const [activeSection, setActiveSection] = useState('surestep');

    return (
        <div className="flex flex-col lg:p-10 lg:ml-20 mt-40 ">
            <div className="mb-10 ">
                <span className="flex items-center gap-4 text-3xl text-slate-300">
                    <h1 className='flex'><span className="text-teal-400">02.</span> Experience</h1>
                    <div className="lg:w-60 w-40 bg-slate-400 h-0.5"></div>
                </span>
            </div>
            <div className='flex flex-row'>
                <div className="text-slate-400 flex flex-col items-start md:mr-10">
                    <div className="flex flex-col gap-4 ">
                        <button onClick={() => setActiveSection('surestep')} className={`border-l-2 pl-2 ${activeSection === 'surestep' ? 'text-teal-400 border-teal-400' : 'border-transparent'}  hover:text-white p-2 rounded-sm`}>
                            Surestep
                        </button>
                        <button onClick={() => setActiveSection('cloudpesa')} className={`border-l-2 pl-2 ${activeSection === 'cloudpesa' ? 'text-teal-400 border-teal-400' : 'border-transparent'}  hover:text-white p-2 rounded-sm`}>
                            CloudPesa
                        </button>
                        <button onClick={() => setActiveSection('teksade')} className={`border-l-2 pl-2 ${activeSection === 'teksade' ? 'text-teal-400 border-teal-400' : 'border-transparent'}  hover:text-white p-2 rounded-sm`}>
                            Teksade
                        </button>
                        <button onClick={() => setActiveSection('navix')} className={`border-l-2 pl-2 ${activeSection === 'navix' ? 'text-teal-400 border-teal-400' : 'border-transparent'}  hover:text-white p-2 rounded-sm`}>
                            Navix
                        </button>
                    </div>
                </div>
                <div className="text-slate-400 md:mt-0 md:ml-10 max-w-xl">
                    {activeSection === 'surestep' && (
                        <div id='surestep'>
                            <p>
                                <strong>Software Developer</strong><br />
                                @Surestep Innovation Center
                                <br />
                                January 2023 - Present
                                <br /><br />
                                <span className='text-teal-500'><TrendingUpOutlinedIcon /></span>    Responsible for developing and maintaining web applications using Next.js.
                                Integrated web applications with payment gateways like M-Pesa and bank APIs.
                            </p>
                        </div>
                    )}
                    {activeSection === 'cloudpesa' && (
                        <div id='cloudpesa'>
                            <p>
                                <strong>Software Developer</strong> @CloudPesa
                                <br />January 2023 - Present
                                <br /><br />
                                Worked on integration of mobile banking applications to web portals.
                                Developed web portals for Credit Unions (SACCOs) like Bulsho Sacco, and KLB.
                            </p>
                        </div>
                    )}
                    {activeSection === 'teksade' && (
                        <div id='teksade'>
                            <p>
                                <strong>Software Developer</strong> @Teksade
                                <br />January 2023 - Present
                                <br /><br />
                                Contributed to the development of a tech community discovery project.
                                Worked primarily on the back-end with tRPC and Prisma to develop the API endpoints.
                            </p>
                        </div>
                    )}
                    {activeSection === 'navix' && (
                        <div id='navix'>
                            <p>
                                <strong>Android Developer</strong> @Navix Systems
                                <br />Dec 2020 - 2022
                                <br /><br />
                                Worked with other developers at the small startup to develop and maintain Zofty, an Android application for finding and ordering manpower services.
                                Integrated the app with Safaricoms Daraja API for mobile payments.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Section2;
