import { dataRowContextType } from "@/context/dataRowContext";
import { TableCell, TableRow } from "@mui/material";
import React from "react";

export default function ContentTabel({ row }: { row: dataRowContextType }) {
  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="left">{row.type}</TableCell>
      <TableCell align="left">{row.label}</TableCell>
      <TableCell align="left">
        {typeof row.value === "function" ? (
          <button onClick={row.value}>click</button>
        ) : (
          row.value
        )}
      </TableCell>
    </TableRow>
  );
}
