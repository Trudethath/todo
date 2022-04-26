import React from 'react'

function Layout(props) {
  return (
    <>
      <div className="header center">
        <h1>{props.title}</h1>
      </div>
      <div className="fill"></div>
    </>
  )
}

export default Layout
