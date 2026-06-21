import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Information from "../../components/Information";

function Dashboard() {
  return (
    <div>
      <Stack direction={"row"} sx={{justifyContent:"space-between", }}>
              <Information title={"Dashboard"} subTitle={"Welcome to your Dashboard"} />
      <Box sx={{ textAlign: "right", marginBottom: "10px" }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Dashboard;
