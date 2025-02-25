import './App.css'
import { useState } from 'react'
import { WishForm } from './components/WishForm'
import { WishList } from './components/WishList'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const gifts = [
  { id: 1, gift: 'Smartphone', person: 'Alice', price: 699, priority: 3 },
  { id: 2, gift: 'Headphones', person: 'Bob', price: 299, priority: 2 },
  { id: 3, gift: 'Book', person: 'Charlie', price: 25, priority: 1 },
  { id: 4, gift: 'Watch', person: 'Diana', price: 199, priority: 2 },
  { id: 5, gift: 'Camera', person: 'Eve', price: 499, priority: 3 },
  { id: 6, gift: 'Tablet', person: 'Frank', price: 350, priority: 2 },
  { id: 7, gift: 'Backpack', person: 'Grace', price: 80, priority: 1 },
  { id: 8, gift: 'Shoes', person: 'Hank', price: 120, priority: 1 },
  { id: 9, gift: 'Perfume', person: 'Ivy', price: 150, priority: 2 },
  { id: 10, gift: 'Bicycle', person: 'Jack', price: 450, priority: 3 },
]

function App() {
  const [giftsList, setGiftList] = useState(gifts)

  function removeGift(id) {
    setGiftList((prev) => prev.filter((gift) => gift.id != id))
  }

  return (
    <StyledApp>
      <WishList gifts={giftsList} removeGift={removeGift} />
      <WishForm setGiftList={setGiftList} />
    </StyledApp>
  )
}

export default App
