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
  { id: 1, gift: 'Smartphone', person: 'Alice', price: 699, priority: 'high' },
  { id: 2, gift: 'Headphones', person: 'Bob', price: 299, priority: 'medium' },
  { id: 3, gift: 'Book', person: 'Charlie', price: 25, priority: 'low' },
  { id: 4, gift: 'Watch', person: 'Diana', price: 199, priority: 'medium' },
  { id: 5, gift: 'Camera', person: 'Eve', price: 499, priority: 'high' },
  { id: 6, gift: 'Tablet', person: 'Frank', price: 350, priority: 'medium' },
  { id: 7, gift: 'Backpack', person: 'Grace', price: 80, priority: 'low' },
  { id: 8, gift: 'Shoes', person: 'Hank', price: 120, priority: 'low' },
  { id: 9, gift: 'Perfume', person: 'Ivy', price: 150, priority: 'medium' },
  { id: 10, gift: 'Bicycle', person: 'Jack', price: 450, priority: 'high' },
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
