import { Box, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pieChart/Pie";
import Bar from "../../page/barChart/Bar";
import Geo from "../../page/geography/Geo";

function Row3() {
  const theme = useTheme();
  return (
    <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap:"wrap" }}>
      <Paper sx={{minWidth:"400px", flexGrow:1, width: "28%" }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            padding: "30px 3px 0 30px",
            fontWeight: "600",
          }}
        >
          Campaign
        </Typography>
        <Pie isDashbord={true}/>
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48.352 revenue generated
        </Typography>
        <Typography variant="body2" align="center" sx={{ px: 0.7, pb: 3 }}>
          Includes extra misc expenditrues and costs
        </Typography>
      </Paper>

      <Paper sx={{minWidth:"400px", flexGrow:1, width: "28%" }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            padding: "30px 3px 0 30px",
            fontWeight: "600",
          }}
        >
          Sales quantity
        </Typography>
        <Bar isDashbord= {true} />
      </Paper>

      <Paper sx={{minWidth:"400px", flexGrow:1, width: "28%" }}>
        <Geo isDashbord= {true} />
      </Paper>
    </Box>
  );
}

export default Row3;
