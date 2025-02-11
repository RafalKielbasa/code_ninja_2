import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const WishForm = ({setGiftList}) => {
  const [gift, setGift] = useState("");
  const [person, setPerson] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gift === "") {
      alert("Nazwa prezentu nie może być pusta");
      return;
    }
    const newGift = { id: Date.now(), gift, person, price };
    setGiftList((prev)=>([...prev,newGift]))
    setGift("")
    setPerson("")
    setPrice(0)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(event) => setGift(event.target.value)}
          id="outlined-basic"
          label="Gift"
          variant="outlined"
          value={gift}
        />
        <TextField
          onChange={(event) => setPerson(event.target.value)}
          id="outlined-basic"
          label="Person"
          variant="outlined"
          value={person}
        />
        <TextField
          onChange={(event) => setPrice(event.target.value)}
          id="outlined-basic"
          type="number"
          label="Price"
          variant="outlined"
          value={price}
        />
        <Button type="submit" variant="text">Dodaj życzenie</Button>
      </form>
    </div>
  );
};
