export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "pending",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 2,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "active",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 3,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "pending",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 4,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "active",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 5,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "pending",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 6,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "passive",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 7,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "passive",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 8,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "active",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 9,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "pending",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  },
  {
    id: 10,
    username: "Siddharth Pampana",
    img: "https://lh3.googleusercontent.com/a-/AFdZuco9KpCf24kkuPlNC5oTHU-tg9ZldDA8txT0Yfal=s360-p-rw-no",
    status: "passive",
    email: "siddharth_pampana@srmap.edu.in",
    age: 21,
  } 

];
