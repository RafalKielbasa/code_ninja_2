import "./App.css";
import { useState } from "react";
import { WishForm } from "./components/WishForm";
import { WishList } from "./components/WishList";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

function App() {
  const [giftsList, setGiftList] = useState([]);

  console.log(giftsList);

  function removeGift(id) {
    setGiftList((prev) => prev.filter((gift) => gift.id != id));
  }

  return (
    <StyledApp>
      <WishList gifts={giftsList} removeGift={removeGift} />
      <WishForm setGiftList={setGiftList} />
    </StyledApp>
  );
}

export default App;
