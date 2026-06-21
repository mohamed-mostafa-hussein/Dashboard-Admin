import { Box } from "@mui/material";
import Geo from "./Geo";
import Information from "../../components/Information";

const Geography = () => {
  return (
    <Box>
      <Information title={"geography Chart"} subTitle={"Simple geography chart"} /> 
      <Geo />
    </Box>
  );
};

export default Geography;