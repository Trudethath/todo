import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './css/style.css'
import Menu from './Menu'
import Content from './Content'

import AppProvider from './AppProvider'

function App() {
  return (
    <BrowserRouter basename="/">
      <AppProvider>
        <div className="wrapper">
          <aside>
            <Menu />
          </aside>
          <section className="content">
            <Content />
          </section>
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
