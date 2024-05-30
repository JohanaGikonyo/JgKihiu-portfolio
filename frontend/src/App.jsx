import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import { Avatar, Divider } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import './App.css';
import Navbar from './Componenets/NavbarFolder/Navbar'
import Home from './Componenets/Home'
import Section1 from './Componenets/Section1';
import Section2 from './Componenets/Section2';
import Section3 from './Componenets/Section3';
import Section4 from './Componenets/Section4'
import Footer from './Componenets/Footer';
function App() {
  return (
    <div className='relative min-h-screen flex flex-col'>

      {/* Left side */}
      <div className="left-menu lg:fixed bottom-0 left-0 lg:flex lg:flex-col items-center lg:p-4 p-0 lg:space-y-4 hidden text-slate-200">
        <Avatar sx={{ bgcolor: blueGrey[500] }}>
          <a href='https://wa.me/+254742377527'><WhatsAppIcon /></a>        </Avatar>
        <Avatar sx={{ bgcolor: blueGrey[500] }}>
          <a href='https://github.com/JohanaGikonyo'><GitHubIcon /></a>
        </Avatar>
        <Avatar sx={{ bgcolor: blueGrey[500] }}>
          <a href='https://www.linkedin.com/in/johana-gikonyo-789118233/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B7819b09b-8fbb-4f11-b15f-a43b887f00e8'><LinkedInIcon /></a>
        </Avatar>
        <Avatar sx={{ bgcolor: blueGrey[500] }}>
          <a href='tel:+254742377527'><CallIcon /></a>
        </Avatar>
        <Avatar sx={{ bgcolor: blueGrey[500] }}>
          <a href='mailto:johanagikonyo552@gmail.com'><MailOutlineIcon /></a>

        </Avatar>
        <div className="w-px h-40 bg-teal-400"></div>
      </div >

      {/* Main content */}
      < Navbar />
      <div className="main-content flex-1 lg:ml-16 m-10">


        <div id="home"><Home /></div>
        <div id='section1'><Section1 /></div>
        <div id='section2'><Section2 /></div>
        <div id='section3'><Section3 /></div>
        <div id='section4'><Section4 /></div>
      </div>

      {/* Right side */}
      <div className="right-menu lg:fixed bottom-0 right-0 lg:flex flex-col items-center lg:p-4 p-0 space-y-1 hidden">
        <div className="w-px h-10 bg-teal-400"></div>
        <div className='text-teal-400 name'><h5>JOHANA KIHIU</h5></div>
        <div className="w-px h-40 bg-teal-500"></div>
      </div>
      <Divider />
      <Footer />
    </div >
  );
}

export default App;
