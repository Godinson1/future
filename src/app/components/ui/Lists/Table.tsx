import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import EnhancedTableHead from "./components/TableHead";
import EnhancedTableToolbar from "./components/TableToolbar";
import { getComparator, stableSort } from "./utils/helper";
import { useTable } from "./hooks/useTable";

interface TableListProps {
  title: string;
  data: any[];
  headerCells: readonly any[];
}

const TableList = ({ title, headerCells, data }: TableListProps) => {
  const {
    handleClick,
    rows,
    page,
    selected,
    rowsPerPage,
    order,
    orderBy,
    handleSelectAllClick,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
    isSelected,
    emptyRows,
  } = useTable(data);

  const stringColumns = ["name", "image"];

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <EnhancedTableToolbar title={title} numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={"medium"}>
            <EnhancedTableHead
              headerCells={headerCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox color='primary' checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} />
                      </TableCell>
                      {headerCells.map((column: any, index: number) =>
                        stringColumns.includes(column.id) ? (
                          <TableCell key={index} id={labelId} scope='row'>
                            {row[column.id]}
                          </TableCell>
                        ) : (
                          <TableCell key={index} align='right'>
                            {row[column.id]}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableList;
