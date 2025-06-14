import React from 'react'
import './Warning.css'
import { useSelector } from 'react-redux'

const Warning = () => {
  const name = useSelector((state)=>state.user.userInfo.name)

  return (
    <div className="warning">
           Deleting account cannot be undone <b>{name? name :'?'}</b>! You should confirm your
           password to delete your account.
    </div>
  )
}

export default Warning