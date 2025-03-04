import { TableCell } from "@mui/material";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

const CustomTableCell = ({ item, index, edit, formState }) => {
  const convertToString = (index, value) => {
    if (index != 3) return value;
    switch (value) {
      case 1:
        return <Chip label="Niski" color="success" />;
      case 2:
        return <Chip label="Średni" color="warning" />;
      case 3:
        return <Chip label="Wysoki" color="error" />;
      default:
        return <Chip label="Niski" color="success" />;
    }
  };

  const { value, setter } = formState(index);
  return (
    <TableCell>
      {!edit ? (
        convertToString(index, item)
      ) : (
        <TextField
          id="outlined-basic"
          label="Gift"
          variant="outlined"
          value={value}
          onChange={(event) => setter(event.target.value)}
        />
      )}
    </TableCell>
  );
};

export default CustomTableCell;
