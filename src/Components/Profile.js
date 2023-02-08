import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state)=> state.myReduce.current)
  return (
    <div>
        <h2>User</h2>
        <div>Username: {user?.Username}</div>
        <div>Age: {user?.Age}</div>
        <div>Email: {user?.Email}</div>
        <div>stack: {user?.stack}</div>
    </div>
  )
}

export default Profile