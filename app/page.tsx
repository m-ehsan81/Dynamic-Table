"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

import { useDataRowContext } from "@/context/dataRowContext";
import FooterTable from "@/components/table/footer";
import HeaderTable from "@/components/table/header";
import ContentTabel from "@/components/table/content";

export default function BasicTable() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const data = useDataRowContext();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <caption>caption</caption>
        <HeaderTable />
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <ContentTabel key={row.id} row={row} />
          ))}
        </TableBody>
        <FooterTable
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          data={data}
        />
      </Table>
    </TableContainer>
  );
}
