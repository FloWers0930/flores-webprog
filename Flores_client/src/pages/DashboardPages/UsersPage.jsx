import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 150, editable: true },
  { field: "lastName", headerName: "Last name", width: 150, editable: true },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "role",
    headerName: "Role",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 14,
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 31,
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 31,
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 11,
    role: "Viewer",
    status: "Active",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    role: "Admin",
    status: "Active",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    role: "Viewer",
    status: "Active",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    role: "Editor",
    status: "Active",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    role: "Admin",
    status: "Inactive",
  },
];

function UsersPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}

export default UsersPage;
