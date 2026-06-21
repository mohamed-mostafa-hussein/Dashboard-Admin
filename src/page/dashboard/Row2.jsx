import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../page/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", mt: 3, gap: 1.5 }}>
      <Paper sx={{ manWidth: 900, minWidth:"400px", flexGrow: 1 }}>
        <Stack
          direction={"row"}
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                mb: 1,
                mt: 2,
                ml: 4,
              }}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" sx={{ ml: 4 }}>
              $59.342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined sx={{ fontSize: "26px" }} />
            </IconButton>
          </Box>
        </Stack>
        <Line isDahboard={true} />
      </Paper>

      <Box
        sx={{
          minWidth: "280px",
          maxHeight: 380,
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              p: 1.2,
              fontWeight: "bold",
              variant: "h6",
            }}
          >
            Recent Transaction
          </Typography>
        </Paper>
        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box sx={{ p: 1.2 }}>
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  {item.user}
                </Typography>
                <Typography variant="body2">{item.txId}</Typography>
              </Box>
              <Typography variant="body1">{item.date}</Typography>
              <Typography
                variant="body2"
                sx={{
                  borderRadius: 1.4,
                  p: 1,
                  bgcolor: theme.palette.error.main,
                  color: theme.palette.getContrastText(
                    theme.palette.error.main,
                  ),
                }}
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}

export default Row2;
