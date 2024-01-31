import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function HeaderTable() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell align="left">Type</TableCell>
        <TableCell align="left">Label</TableCell>
        <TableCell align="left">Value</TableCell>
      </TableRow>
    </TableHead>
  );
}
