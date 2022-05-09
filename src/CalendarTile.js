import React, { useContext } from 'react'
import { AppContext } from './AppProvider'
import { Link } from 'react-router-dom'

function CalendarTile(props) {
  const { date, disabled } = props
  const day = props.date.slice(8, 10)
  const { tasks } = useContext(AppContext)

  const filterTasks = tasks.filter((task) => {
    return task.date === date && task.active
  })

  const tasksToday = filterTasks.map((task) => {
    return <p key={task.id}> - {task.title}</p>
  })

  const firstTasks = (
    <>
      {tasksToday[0]}
      <p>...</p>
    </>
  )

  return (
    <>
      <Link to="/day" state={{ date }}>
        <li className="calendarTile" disabled={disabled && 'disabled'}>
          <div>
            <span className="dayNum">{day}</span>
            <span className="tasks">
              {tasksToday.length >= 2 ? firstTasks : tasksToday}
            </span>
          </div>
        </li>
      </Link>
    </>
  )
}

export default CalendarTile
