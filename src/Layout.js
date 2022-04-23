import React, { useContext } from 'react'
import { AppContext } from './AppProvider'

function Layout(props) {
  const { tasks } = useContext(AppContext)
  console.log(tasks)

  return (
    <>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
    </>
  )
}

export default Layout
