import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './Layout'

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Layout title="Home" />} />
      <Route exact path="/today" element={<Layout title="Today" />} />
      <Route exact path="/important" element={<Layout title="Important" />} />
      <Route exact path="/all" element={<Layout title="All" />} />
      <Route exact path="/calendar" element={<Layout title="Calendar" />} />
      <Route exact path="/completed" element={<Layout title="Completed" />} />
      <Route exact path="/addTask" element={<Layout title="addTask" />} />
    </Routes>
  )
}

export default Content
