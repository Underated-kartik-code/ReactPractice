import React, { useState } from 'react'

const App = () => {
  const arr = ["kartik","Utkarsh","Pranav","Chetan","Lokesh"]
  const [user, setuser] = useState(0)

  return (
    <div>
      <h1>{arr[user]}</h1>
      <button onClick={()=>{
        setuser(user+1)
      }}>Change User</button>
    </div>
  )
}

export default App