// MuiTable.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// Define the interface for the row data
interface RowData {
  name: string;
  age: number;
  job: string;
  company: string; 
}

// Example data
const rows: RowData[] = [
  { name: "Taran Deep Singh", age: 28, job: "SSE", company: "Singh1" },
  { name: "John Doe", age: 25, job: "Engineer", company: "11 Company" },
  { name: "Jane Smith", age: 30, job: "Designer", company: "31 System" },
  { name: "Sam Green", age: 35, job: "Manager", company: "Singh1" },
];

const MuiTable: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.job}</TableCell>
              <TableCell>{row.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default MuiTable;
