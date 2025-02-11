import './App.css'
import { useState } from 'react'
import { WishForm } from './components/WishForm'
import { WishList } from './components/WishList'


function App() {
  const [giftsList,setGiftList] =useState([]) 
 
  return(
  <>
  <WishList gifts={giftsList}
  />
<WishForm setGiftList={setGiftList}/>
  </>)
}


export default App
