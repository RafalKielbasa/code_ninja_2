import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export const WishList = ({ gifts = [] }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Gift</TableCell>
            <TableCell>Person</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gifts?.map((gift, index) => {
            const giftArray = Object.entries(gift)
              .filter(([key]) => key !== 'id')
              .map(([_, value]) => value)
            return (
              <TableRow key={gift.id}>
                {giftArray?.map((item) => (
                  <TableCell key={`${item}-${index}`}>{item}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
