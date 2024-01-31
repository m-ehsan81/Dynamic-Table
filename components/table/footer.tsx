import { dataRowContextType } from "@/context/dataRowContext";
import { TableFooter, TablePagination, TableRow } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type FooterTabelProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  data: dataRowContextType[];
};

export default function FooterTable(props: FooterTabelProps) {
  const { page, setPage, rowsPerPage, setRowsPerPage, data } = props;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          count={data.length}
          onPageChange={handleChangePage}
          page={page}
          rowsPerPage={rowsPerPage}
          colSpan={4}
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableRow>
    </TableFooter>
  );
}
