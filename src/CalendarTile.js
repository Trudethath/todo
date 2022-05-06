import React, { useContext } from 'react'
import { AppContext } from './AppProvider'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function CalendarTile(props) {
  const { date, disabled } = props
  const day = props.date.slice(8, 10)
  const { tasks } = useContext(AppContext)

  const filterTasks = tasks.filter((task) => {
    return task.date === date
  })

  const tasksToday = filterTasks.map((task) => {
    return <span key={task.id}>{task.title}</span>
  })

  return (
    <>
      <Link to="/day" state={{ date }}>
        <li className="calendarTile" disabled={disabled && 'disabled'}>
          <div>
            <span className="dayNum">{day}</span>
            <span className="tasks">{tasksToday}</span>
          </div>
        </li>
      </Link>
    </>
  )
}

export default CalendarTile
