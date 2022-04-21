import React, { useState, useEffect } from 'react'
import axios from 'axios'
import blankUserImage from './images/blankUser.jpg'

function User() {
  const url = 'https://randomuser.me/api/?results=1'
  const [user, setData] = useState({ name: '', img: '' })
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(url).then((response) => {
      const data = response.data.results[0]
      setData({
        name: data.name.first + ' ' + data.name.last,
        img: data.picture.large,
      })
      isLoading(false)
    })
  }

  const loaded = (
    <>
      <img src={user.img} alt="userImage"></img>
      <h2>{user.name}</h2>
    </>
  )
  const notLoaded = (
    <>
      <img src={blankUserImage} alt="blankUser" />
      <h2>...</h2>
    </>
  )

  return (
    <div className="userWrapper">
      {' '}
      <div>{!loading ? loaded : notLoaded}</div>
    </div>
  )
}

export default User
