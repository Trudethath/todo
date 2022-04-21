import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { MdToday, MdDone, MdOutlineAddBox } from 'react-icons/md'
import { AiOutlineStar, AiOutlineHome } from 'react-icons/ai'
import { BsListUl } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'

function Navbar() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <span>
              <Link to="/">
                <span className="icon">
                  <AiOutlineHome />
                </span>
                <span>Home</span>
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="today">
                <span className="icon">
                  <MdToday className="menuIcon" />
                </span>
                <span>Today</span>
              </Link>
            </span>
          </li>
          <li>
            <Link to="important">
              <span className="icon">
                <AiOutlineStar className="menuIcon" />
              </span>
              <span>Important</span>
            </Link>
          </li>
          <li>
            <Link to="all">
              <span className="icon">
                <BsListUl className="menuIcon" />
              </span>
              <span>All</span>
            </Link>
          </li>
          <li>
            <Link to="calendar">
              <span className="icon">
                <FaRegCalendarAlt className="menuIcon" />
              </span>
              <span>Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="completed">
              <span className="icon">
                <MdDone className="menuIcon" />
              </span>
              <span>Completed</span>
            </Link>
          </li>
          <li className="end">
            <Link to="addTask">
              <span className="icon">
                <MdOutlineAddBox className="menuIcon" />
              </span>
              <span>Add task</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default Navbar
