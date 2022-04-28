import React, { useContext } from 'react'
import { AppContext } from './AppProvider'

function CalendarTile(props) {
  const day = props.date.slice(8, 10)
  const { tasks } = useContext(AppContext)

  const filterTasks = tasks.filter((task) => {
    return task.date === props.date
  })

  const tasksToday = filterTasks.map((task) => {
    return <span key={task.id}>{task.title}</span>
  })

  return (
    <li className="calendarTile">
      <div>
        <span className="dayNum">{day}</span>
        <span className="tasks">{tasksToday}</span>
      </div>
    </li>
  )
}

export default CalendarTile
