import { Stack, useTheme } from "@mui/material";
import CardContent from "./CardContent";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{
        flexWrap: "wrap",
        gap: 1,
        justifyContent: { xs: "center", sm: "space-between" },
      }}
    >
      <CardContent
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12.361"}
        subTitle={"Email sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />
      <CardContent
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"433.215"}
        subTitle={"Sales Obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />
      <CardContent
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32.441"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <CardContent
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1.325.134"}
        subTitle={"Trafic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
}

export default Row1;
