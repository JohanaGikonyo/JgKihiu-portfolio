import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
    return (
        <div className='flex flex-row justify-end items-center m-10 '>
            <div className="text-slate-300 flex gap-5">
                <span className='flex items-center'><CopyrightIcon /> copyright  {new Date().getFullYear()}</span>
                <span>JG Technologies</span>
            </div>
        </div>
    )
}

export default Footer