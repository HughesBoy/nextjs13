import React from 'react'

const Work = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return (
    <div>
      {users ? users.map(user => <p key={user.id}>{user.name}</p>) : "no users"}
    </div>
  )
}

export default Work