import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

export const GiftsTableRow = ({ gift, giftIndex, removeGift }) => {
  const giftArray = Object.entries(gift)
    .filter(([key]) => key !== "id")
    .map(([_, value]) => value);

  return (
    <TableRow>
      {giftArray?.map((item) => (
        <TableCell key={`${item}-${giftIndex}`}>{item}</TableCell>
      ))}
      <TableCell>
        <Button onClick={() => removeGift(gift.id)}>Usuń</Button>
      </TableCell>
    </TableRow>
  );
};
