import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { GiftsTableRow } from "./GiftsTableRow";
import styled from "styled-components";

const StyledWishList = styled.div`
  display: flex;
  flex: 1;
  padding: 4px;
`;

export const WishList = ({ gifts = [], removeGift }) => {
  const [priority, setPriority] = useState("asc");

  const sortPriority = () => {
    if (priority === "asc") {
      setPriority("desc");
    } else {
      setPriority("asc");
    }
  };

  const sortedGifts = [...gifts].sort(( {priority:firstPriority},{priority:secondPriority}) => {
    if (priority === "asc") return firstPriority-secondPriority
    return secondPriority-firstPriority;
  }
    
  )

  return (
    <StyledWishList>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Gift</TableCell>
            <TableCell>Person</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>
              <TableSortLabel active direction={priority} onClick={sortPriority}>
                Priority
              </TableSortLabel>
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedGifts?.map((gift, index) => (
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
