import React from 'react'

const UserCard = ({name = 'John', age = '30', role = 'Developer', handleDeleteUser}) => {
  return (
    <div className="box">
        <h4>{name}</h4>
        <p>Age: {age}</p>
        <p>Role: {role}</p>
        <button onClick={handleDeleteUser} >Usuń</button>
    </div>
  )
}

export default UserCard