import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GiftsTableRow } from "./GiftsTableRow";
import styled from "styled-components";

const StyledWishList = styled.div`
  display: flex;
  flex: 1;
  padding: 4px;
`;

export const WishList = ({ gifts = [], removeGift }) => {
  return (
    <StyledWishList>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Gift</TableCell>
            <TableCell>Person</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gifts?.map((gift, index) => (
            <GiftsTableRow
              key={index}
              gift={gift}
              giftIndex={index}
              removeGift={removeGift}
            />
          ))}
        </TableBody>
      </Table>
    </StyledWishList>
  );
};
