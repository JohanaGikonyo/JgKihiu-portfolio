import img1 from '../images/johana3.jpeg';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Chip } from '@mui/material';
import { Link } from 'react-scroll';// Import from react-scroll
import DrawerNavigator from './Drawer';
import resume from '../../../assets/documents/Resume.pdf'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function Navbar() {
    return (

        <div className="flex flex-row justify-between items-center w-[100%] mt-0 rounded-lg top-0 sticky  lg:gap-40  z-50 shadow-sm shadow-black p-4 bg-slate-800">

            <div className='text-white'>
                <a href="https://github.com/JohanaGikonyo"><Stack direction="row" spacing={2}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        variant="dot"
                    >
                        <Chip avatar={<Avatar alt="Remy Sharp" src={img1} />} variant='outlined' label={<p className='text-teal-400'>JG</p>} />
                    </StyledBadge>
                </Stack>
                </a>
            </div>
            <div className="hidden lg:flex flex-row justify-between gap-5 items-center text-slate-400">
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                    <small>Home</small>
                </Link>
                <Link to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                    <small className='flex flex-row items-center justify-around'><span className='text-teal-400'>01.</span> About </small>
                </Link>
                <Link to="section2" spy={true} smooth={true} offset={-70} duration={500}>
                    <small className='flex flex-row items-center justify-around gap-1'><span className='text-teal-400'>02.</span>  Experience</small>
                </Link>
                <Link to="section3" spy={true} smooth={true} offset={-70} duration={500}>
                    <small className='flex flex-row items-center justify-around'><span className='text-teal-400'>03.</span> Projects</small>
                </Link>
                <Link to="section4" spy={true} smooth={true} offset={-70} duration={500}>
                    <small className='flex flex-row items-center justify-around'><span className='text-teal-400'>04.</span> Contact</small>
                </Link>
                <a href={resume} download rel="noopener noreferrer" className='text-teal-400 border rounded-md p-1 border-teal-400'>
                    Resume
                </a>
            </div>

            <div className="lg:hidden" > <DrawerNavigator /></div>
        </div>


    );
}

export default Navbar;
