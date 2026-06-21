import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Information from "../../components/Information";

function Team() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.4,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      // @ts-ignore
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "100px",
              textAlign: "center",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              mx: "auto",
              alignItems: "center",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {" "}
              {access}{" "}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ height: 600, width: "100%" }}>
      <Information title={"Your Team"} subTitle={"Manage your team"} />
      <DataGrid
        // @ts-ignore
        rows={rows}
        // @ts-ignore
        columns={columns}
        columnVisibilityModel={{
          email: !isMobile,
          phone: !isMobile,
        }}
      />
    </div>
  );
}

export default Team;
