import { Box } from "@mui/material";
import Pie from "./Pie";
import Information from "../../components/Information";
const PieChart = () => {
  return (
    <Box>
      <Information title={"pie Chart"} subTitle={"Simple pie chart"} /> 
        <Pie />
    </Box>
  );
};

export default PieChart;