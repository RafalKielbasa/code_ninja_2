import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { useState } from "react";
import CustomTableCell from "./CustomTableCell";

export const GiftsTableRow = ({ gift, giftIndex, removeGift, setGiftList }) => {
  const [edit, setEdit] = useState(false);
  const [giftName, setGiftName] = useState(gift.gift);
  const [person, setPerson] = useState(gift.person);
  const [price, setPrice] = useState(gift.price);
  const [priority, setPriority] = useState(gift.priority);

  const giftArray = Object.entries(gift)
    .filter(([key]) => key !== "id")
    .map(([, value]) => value);

  function handleEditBtn() {
    setEdit((prev) => !prev);
  }

  function setState(index) {
    if (index === 0) return { value: giftName, setter: setGiftName };
    if (index === 1) return { value: person, setter: setPerson };
    if (index === 2) return { value: price, setter: setPrice };
    if (index === 3) return { value: priority, setter: setPriority };
  }
  function setNewGiftList() {
    setGiftList((prev) =>
      prev.map((item) => {
        if (item.id === gift.id)
          return { id: gift.id, gift: giftName, person, price, priority };
        return item;
      })
    );
    handleEditBtn();
  }

  return (
    <TableRow>
      {giftArray?.map((item, index) => (
        <CustomTableCell
          key={`${item}-${giftIndex}`}
          item={item}
          index={index}
          gift={gift}
          edit={edit}
          giftIndex={giftIndex}
          formState={setState}
        />
      ))}
      <TableCell>
        <Button onClick={() => removeGift(gift.id)}>Usuń</Button>
        {!edit ? (
          <Button onClick={handleEditBtn}>Edytuj</Button>
        ) : (
          <>
            <Button onClick={setNewGiftList}>Zapisz</Button>
            <Button onClick={handleEditBtn}>Anuluj</Button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};
