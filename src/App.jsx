import './App.css'
import UserCard from './components/UserCard'

import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([
    { name: 'Alice', age: 25, role: 'Developer', id: 1 },
    { name: 'Bob', age: 30, role: 'Designer', id: 2 },
  ])

  function addUser() {
    const newUser = { name: 'Andrew', age: 23, role: 'Tester', id: users.length + 1 }
    setUsers((prev)=>{
      return [...prev, newUser]
    })
  } 

  function deleteUser(id) {
    setUsers((prev)=>prev.filter(({id:userId})=>userId !== id))
  }

  return (
    <div>
      <div className="container">
        {users.map((user)=>
          <UserCard {...user} key={user.id} handleDeleteUser={()=>deleteUser(user.id)}/>
        )}        
      </div>
      <button onClick={addUser}>Add User</button>
    </div>
  )
}


export default App
