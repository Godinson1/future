import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IDataTable {
  rows: any;
  columns: GridColDef[];
  handleRowClick: (data: any) => void;
}

const DataTable = ({ rows, columns, handleRowClick }: IDataTable) => {
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid onRowClick={handleRowClick} rows={rows} columns={columns} rowHeight={70} />
    </div>
  );
};

export default DataTable;
