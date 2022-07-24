import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/accounts/test" style={{ textDecoration: "none" }}>
              <Button variant="outlined" className="viewButton" style={{textTransform:"none"}}>View</Button>
            </Link>
            <Button variant="outlined" style={{textTransform:"none"}}
              className="deleteButton" color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              Logout
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Account
        <Link style={{ textDecoration: "none" }} to="/accounts/new"  className="link">
          <Button variant="outlined"><PersonAddAlt1Icon/><p>Add new</p></Button>
          
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
