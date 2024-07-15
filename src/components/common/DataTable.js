
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";


const DataTable=({columns, rows ,...props}) => {
  const{checkboxSelection}=props;

  
  return (
    <div style={{ height: 480, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 }
          }
        }}
        pageSizeOptions={[5, 10]}
         checkboxSelection={checkboxSelection}
         disableRowSelectionOnClick={!checkboxSelection}
      />
    </div>
  );
}
export default  DataTable
