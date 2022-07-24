import "./sidebar.scss";
import { Link } from "react-router-dom";
import PayPal from './../../assets/PayPal.svg'
const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
           <img alt="" src={PayPal}/>
        </Link>
      </div>
 
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            
            <span>Home</span>
          </li>  </Link>
          <Link to="/accounts/test" style={{ textDecoration: "none" }}>
          <li>
           
           <span>Profile</span>
         </li> </Link>
           
         
       
      
          
          <p className="title">LISTS</p>
          <Link to="/accounts" style={{ textDecoration: "none" }}>
            <li>
              
              <span>Accounts</span>
            </li>
          </Link>
          <Link to="/payment" style={{ textDecoration: "none" }}>
            <li>
            
              <span>Send Payment</span>
            </li>
          </Link>
          <li>
          
            <span>Request Payment</span>
          </li>
          <li>
             
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
           
            <span>Wallet</span>
          </li>
          <li>
            
            <span>Stats</span>
          </li>
          <li>
            
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
             
            <span>Merchant Service</span>
          </li>
          <li>
       
            <span>Product Service</span>
          </li>
       
         
        </ul>
      </div>
      <div className="bottom">
       
      </div>
    </div>
  );
};

export default Sidebar;
