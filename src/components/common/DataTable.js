
import React from "react";

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const DataTable = ({ columns, rows, pagination, paginationPageSize, paginationPageSizeSelector, rowSelection }) => {

    return (
        <div
            className="ag-theme-quartz"
            style={{ height: 400, width: 'auto' }}
        >
            <AgGridReact
                rowData={rows}
                columnDefs={columns}
                pagination={pagination || true}
                paginationPageSize={paginationPageSize || 10}
                paginationPageSizeSelector={paginationPageSizeSelector || [10, 20, 30, 50, 100]}
                rowSelection={rowSelection || "multiple"}
                moveColumns={false}
                suppressDragLeaveHidesColumns={true}
                suppressMovable={false}

            />
        </div>
    )
}
export default DataTable

