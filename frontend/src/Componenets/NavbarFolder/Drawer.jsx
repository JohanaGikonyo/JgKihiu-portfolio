import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-scroll';
import SegmentIcon from '@mui/icons-material/Segment';

function DrawerNavigator() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div className='flex justify-end m-5 '><CloseIcon /></div>
            <Divider />

            <div className="flex flex-col justify-between gap-5 items-center text-slate-500 text-center">
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleDrawer(false)}>
                    <small>Home</small>
                </Link>
                <Link to="section1" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleDrawer(false)}>
                    <small className='flex flex-row items-center justify-around'><span className='text-teal-400'>01.</span> About </small>
                </Link>
                <Link to="section2" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleDrawer(false)}>
                    <small className='flex flex-row items-center justify-around gap-1'><span className='text-teal-400'>02.</span>  Experience</small>
                </Link>
                <Link to="section3" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleDrawer(false)}>
                    <small className='flex flex-row items-center justify-around'><span className='text-teal-400'>03.</span> Projects</small>
                </Link>
                <Link to="section4" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleDrawer(false)}>
                    <small className='flex flex-row items-center justify-around'><span className='text-teal-400'>04.</span> Contact</small>
                </Link>
                <button className='text-teal-400 border rounded-md p-1 border-teal-400'>Resume</button>
            </div>

            <Divider />
            <div className='flex flex-col text-center justify-around m-5'>
                <div className='flex flex-row gap-4 justify-around text-slate-600'>
                    <a href='tel:+254742377527'><CallIcon /></a>
                    <a href='https://www.linkedin.com/in/johana-gikonyo-789118233/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B7819b09b-8fbb-4f11-b15f-a43b887f00e8'><LinkedInIcon /></a>
                    <a href='https://github.com/JohanaGikonyo'><GitHubIcon /></a>
                    <a href='https://wa.me/+254742377527'><WhatsAppIcon /></a>
                    <a href='mailto:johanagikonyo552@gmail.com'><MailOutlineIcon /></a>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}> <div className='text-teal-400 '><SegmentIcon /></div></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default DrawerNavigator;
