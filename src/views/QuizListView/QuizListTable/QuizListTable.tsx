import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StyledTableCell from "../../../components/StyledTableCell/StyledTableCell";
import QuizListRow from "./QuizListRow/QuizListRow";
import { observer } from "mobx-react-lite";
import { IncomingQuiz, QuizListActionProps } from "../../../types/quiz";

type QuizListTableProps = {
  data: IncomingQuiz[];
} & QuizListActionProps;

const QuizListTable = observer(
  ({ data, handleEdit, handleShow, handleDelete }: QuizListTableProps) => {
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
            {data.length ? (
              data.map((row) => (
                <QuizListRow
                  key={row.id}
                  row={row}
                  handleEdit={handleEdit}
                  handleShow={handleShow}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <TableRow>
                <StyledTableCell>There are no quizzes currently available.</StyledTableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);

export default QuizListTable;
