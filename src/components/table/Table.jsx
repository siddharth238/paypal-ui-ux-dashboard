import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Spotify",
      img: "https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png",
      customer: "Payment from",
      date: "05/02/2022",
      amount: "999",
  
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Yt Music",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png",
      customer: "Payment to",
      date: "05/07/2022",
      amount: "1,900",
    
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Epic games",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/882px-Epic_Games_logo.svg.png",
      customer: "Payment from",
      date: "26/07/2022",
      amount: "2,700",
  
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Coursera",
      img: "https://www.langoly.com/wp-content/uploads/2021/09/coursera-logo-1024x1024.png",
      customer: "Payment to",
      date: "05/02/2021",
      amount: "1,000",
     
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Google",
      img: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
      customer: "Payment to",
      date: "05/10/2021",
      amount: "2,000",
  
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Payment subject</TableCell>
            <TableCell className="tableCell">Type</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
          
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount} INR</TableCell>
        
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
