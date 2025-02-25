import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import styled from 'styled-components'

const StyledWishForm = styled.div`
  display: flex;
  flex: 1;
  padding: 4px;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const WishForm = ({ setGiftList }) => {
  const [gift, setGift] = useState('')
  const [person, setPerson] = useState('')
  const [price, setPrice] = useState(0)
  const [priority, setPriority] = useState('low')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (gift === '') {
      alert('Nazwa prezentu nie może być pusta')
      return
    }
    const newGift = { id: Date.now(), gift, person, price, priority }
    setGiftList((prev) => [...prev, newGift])
    setGift('')
    setPerson('')
    setPrice(0)
    setPriority('low')
  }
  return (
    <StyledWishForm>
      <form onSubmit={handleSubmit}>
        <StyledDiv>
          <TextField
            margin='normal'
            onChange={(event) => setGift(event.target.value)}
            id='outlined-basic'
            label='Gift'
            variant='outlined'
            value={gift}
          />
          <TextField
            margin='normal'
            onChange={(event) => setPerson(event.target.value)}
            id='outlined-basic'
            label='Person'
            variant='outlined'
            value={person}
          />
          <TextField
            margin='normal'
            onChange={(event) => setPrice(event.target.value)}
            id='outlined-basic'
            type='number'
            label='Price'
            variant='outlined'
            value={price}
          />
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <MenuItem value='low'>Niski</MenuItem>
            <MenuItem value='medium'>Średni</MenuItem>
            <MenuItem value='high'>Wysoki</MenuItem>
          </Select>
          <Button type='submit' variant='text'>
            Dodaj życzenie
          </Button>
        </StyledDiv>
      </form>
    </StyledWishForm>
  )
}
