import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';

export const GiftsTableRow = ({ gift, giftIndex, removeGift }) => {
  const giftArray = Object.entries(gift)
    .filter(([key]) => key !== "id")
    .map(([, value]) => value);

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

  return (
    <TableRow>
      {giftArray?.map((item, index) => (
        <TableCell key={`${item}-${giftIndex}`}>{convertToString(index, item)}</TableCell>
      ))}
      <TableCell>
        <Button onClick={() => removeGift(gift.id)}>Usuń</Button>
      </TableCell>
    </TableRow>
  );
};
