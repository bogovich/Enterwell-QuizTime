import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import StyledTableCell from "../../../../components/StyledTableCell/StyledTableCell";
import { IncomingQuiz, QuizListActionProps } from "../../../../types/quiz";

type QuizListRowProps = {
  row: IncomingQuiz;
} & QuizListActionProps;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.grey["A200"],
  },
  "&:hover": {
    backgroundColor: theme.palette.action.focus,
    cursor: "pointer",
  },
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
}));

const QuizListRow = ({
  row,
  handleEdit,
  handleShow,
  handleDelete,
}: QuizListRowProps) => (
  <StyledTableRow key={row.id} onClick={handleEdit}>
    <StyledTableCell component="th" scope="row">
      {row.name}
    </StyledTableCell>
    <StyledTableCell align="right">
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Tooltip title="Show" placement="top" arrow>
          <IconButton
            aria-label="play"
            color="primary"
            size="large"
            onClick={handleShow(row.id)}
          >
            <PlayCircleFilledWhiteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement="top" arrow>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={handleDelete(row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </StyledTableCell>
  </StyledTableRow>
);

export default QuizListRow;
