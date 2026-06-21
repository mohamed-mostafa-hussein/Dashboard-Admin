import { useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"
import { rows, columns } from "./data";
import Information from "../../components/Information";
function Invoices() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
        <div style={{ height: 600, width: "100%" }}>
          <Information title={"Invoices Balance"} subTitle={""} />
          <DataGrid
          checkboxSelection
            // @ts-ignore
            rows={rows}
            // @ts-ignore
            columns={columns}
            columnVisibilityModel={{
              email: !isMobile,
              phone: !isMobile,
              address: !isMobile,
            }}
          />
        </div>
  )
}

export default Invoices