import "./navbar.scss";
import IconButton from '@mui/material/IconButton';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BarChartIcon from '@mui/icons-material/BarChart';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SegmentIcon from '@mui/icons-material/Segment';
 
import { Link } from "react-router-dom";
const Navbar = () => {
 

  return (
    <div className="navbar">
      <div className="wrapper">
        <>Paypal dashboard</>
        <div className="items">
          <div className="item">
            <IconButton style={{marginRight:5 ,color:"#009cde"}}>
            <LanguageOutlinedIcon className="icon" /></IconButton>
            <p>English</p>
          </div>
          
          <div className="item"> 
          <IconButton   style={{ color:"#009cde"}}>  <FullscreenExitOutlinedIcon className="icon" /></IconButton>
          </div>
          <div className="item">
          <IconButton  style={{ color:"#009cde"}}>  <NotificationsNoneOutlinedIcon className="icon" /></IconButton>
           
          </div>
          <div className="item">
          <IconButton  style={{ color:"#009cde"}}>  <BarChartIcon className="icon" /></IconButton>
             
          </div>
          <div className="item">
          <IconButton  style={{ color:"#009cde"}}>   <SegmentIcon  className="icon" /></IconButton>
          </div>
          <div className="item">
          <Link to="/accounts/test" style={{ textDecoration: "none" }}>
          <img
              src="https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no"
              alt=""
              className="avatar"
            />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
