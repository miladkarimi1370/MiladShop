import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChangeNumberToPersianForPhone } from '@/tools/changeNumbersToPersian';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('تی شرت دخترانه', 159, 6.0, 24),
    createData('تی شرت دخترانه کراپ', 237, 9.0, 37),
    createData('تی شرت دخترانه سایز بزرگ', 262, 16.0, 24),
    createData('تی شرت یقه باز دخترانه', 305, 3.7, 67),
    createData('تی شرت نخی ضخیم آستین بلند', 356, 16.0, 49),
];

export default function ShowTable() {
    return (
        <TableContainer component={Paper} sx={{ my: 5 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>سایز </StyledTableCell>
                        <StyledTableCell align="right">دور بازو</StyledTableCell>
                        <StyledTableCell align="right">دور سینه</StyledTableCell>
                        <StyledTableCell align="right">دور کمر</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{ChangeNumberToPersianForPhone(row.calories)}</StyledTableCell>
                            <StyledTableCell align="right">{ChangeNumberToPersianForPhone(row.carbs)}</StyledTableCell>
                            <StyledTableCell align="right">{ChangeNumberToPersianForPhone(row.fat)}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
