import { DataGrid, Toolbar, ToolbarButton, FilterPanelTrigger, ColumnsPanelTrigger, ExportCsv, QuickFilter } from "@mui/x-data-grid";
import { useMediaQuery, useTheme } from "@mui/material";
import { columns, rows } from "./data";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Information from "../../components/Information";

function CustomToolbar() {
  const theme = useTheme();
  return (
    <Toolbar style={{ justifyContent: "flex-start", gap: "8px" }}>
      <ColumnsPanelTrigger render={<ToolbarButton />}>
        <ViewColumnIcon sx={{color: theme.palette.primary.dark}} fontSize="small" />
        <span style={{ marginLeft: 4, fontSize: "18px", color: theme.palette.primary.dark }}>Columns</span>
      </ColumnsPanelTrigger>

      <FilterPanelTrigger render={<ToolbarButton />}>
        <FilterListIcon sx={{color: theme.palette.primary.dark}} fontSize="small" />
        <span style={{ marginLeft: 4, fontSize: "18px", color: theme.palette.primary.dark }}>Filters</span>
      </FilterPanelTrigger>
      
      <ExportCsv render={<ToolbarButton />}>
        <FileDownloadIcon sx={{color: theme.palette.primary.dark}} fontSize="small" />
        <span style={{ marginLeft: 4, fontSize: "18px", color: theme.palette.primary.dark }}>Export</span>
      </ExportCsv>

      <QuickFilter style={{ marginLeft: "auto" }} />
    </Toolbar>
  );
}

function Contacts() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Information title={"Contacts"} subTitle={""} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
        showToolbar
        columnVisibilityModel={{
          email: !isMobile,
          phone: !isMobile,
          address: !isMobile,
        }}
      />
    </div>
  );
}

export default Contacts;