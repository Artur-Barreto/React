import React from "react";
import {
  makeStyles,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyle = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calorias, gordura, carboidratos, proteinas) {
  return { name, calorias, gordura, carboidratos, proteinas };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyle();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple-table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calorias</TableCell>
            <TableCell align="right">gordura&nbsp;(g)</TableCell>
            <TableCell align="right">carboidratos&nbsp;(g)</TableCell>
            <TableCell align="right">proteinas&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calorias}</TableCell>
              <TableCell align="right">{row.gordura}</TableCell>
              <TableCell align="right">{row.carboidratos}</TableCell>
              <TableCell align="right">{row.proteinas}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}