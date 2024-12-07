import resume from '../../assets/documents/Johana resume.docx'

function Home() {
    return (
        <div className="text-slate-400 lg:ml-10 lg:p-10 mt-[6%]">
            <p className="text-teal-400 m-5">Jambo <span >👋🏾</span>,My name is</p>
            <h1 className="text-slate-300 font-extrabold text-6xl">JOHANA GIKONYO.</h1>
            <h1 className="text-slate-400 font-extrabold text-5xl">I am a Software Engineer.</h1>
            <div>
                <h2>
                    I am a Software Engineer with 4+ years of experience and fervent tech enthusiast.
                    <br />
                    My expertise lies in translating


                    <span className="
                        text-teal-400 hover:cursor-pointer real-world"> Real-world </span>




                    problems into elegant <span className="text-teal-400 p-1">
                        <span className=" hover:border-teal-400 hover:cursor-pointer tech"> tech solutions </span>
                    </span>, and I`m passionate about<br />
                    harnessing the power of technology to make a positive impact.
                </h2>
            </div>


            <div>
                <a href={resume} download>  <button className="p-3 text-teal-400 border border-teal-400 lg:m-10 m-5 rounded-lg">DownLoad Resume</button></a>
            </div>
        </div >
    )
}

export default Home