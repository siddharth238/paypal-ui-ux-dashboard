import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from '@mui/material/Button';
import Payment from "../../components/payment/Payment";
import PaymentsIcon from '@mui/icons-material/Payments';
import AddIcon from '@mui/icons-material/Add';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Current Balance</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">

        <div className="amountcontainer">
          <p className="amount">₹527K</p>
          <p className="titlea">Available</p></div>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="buttons">
          <Button variant="outlined"  >Transfer Money</Button>
          <Button variant="outlined">Add Money</Button>
        </div>
        <div className="paymentbuttons">
          <Payment Icon={CurrencyRupeeIcon} title="Send" bottomtitle="Money now" />
          <Payment Icon={PaymentsIcon} title="Request" bottomtitle="Money now" />
          <Payment Icon={AddIcon} title="More" more={true} bottomtitle="Funds options" /></div>
      </div>
    </div>
  );
};

export default Featured;
