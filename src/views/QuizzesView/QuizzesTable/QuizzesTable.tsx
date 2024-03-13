import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Stack from '@mui/material/Stack';

import Tooltip from '@mui/material/Tooltip';

import { observer } from "mobx-react-lite";
import { Quiz } from '../../../types/quiz';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '8px 16px',
  },
  [`&:nth-of-type(2)`]: {
    width: '25%',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey["A200"],
  },
  '&:hover': {
    backgroundColor: theme.palette.action.focus,
    cursor: 'pointer',
  },
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}));

const handleEdit = () => {
  console.log('edit');
}

const handleAction = (event: React.MouseEvent) => {
  event.stopPropagation();
  console.log('action');
}


const CustomizedTables = observer(({data}: { data: Quiz[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name} onClick={handleEdit}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <Tooltip title="Run" placement="top" arrow>
                    <IconButton aria-label="play" color="primary" size="large" onClick={handleAction}>
                      <PlayCircleFilledWhiteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" placement="top" arrow>
                    <IconButton aria-label="delete" size="large" onClick={handleAction}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default CustomizedTables;
