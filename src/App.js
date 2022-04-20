import React, { useState } from 'react'
import './css/style.css'
import Menu from './Menu'
import Content from './Content'

function App() {
  return (
    <div className="wrapper">
      <nav>
        <Menu />
      </nav>
      <section>{/* <Content /> */}</section>
    </div>
  )
}

export default App
