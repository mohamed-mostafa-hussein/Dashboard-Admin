import { Box } from "@mui/material";
import Line from "./Line";
import Information from "../../components/Information";
const LineChart = () => {
  return (
    <Box>
      <Information title={"Line Chart"} subTitle={"Simple line chart"} /> 
      <Line />
    </Box>
  );
};

export default LineChart;