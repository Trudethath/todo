import React from 'react'
import Task from '../Task'
import { useLocation } from 'react-router-dom'

function Layout(props) {
  const todaysDate = new Date().toISOString().slice(0, 10)
  const location = useLocation()
  const { option } = props
  let { tasks } = props

  const importantTasks = tasks.filter(
    (task) => task.important === true && task.active === true,
  )

  const completedTasks = tasks.filter((task) => !task.active)
  const todaysTasks = tasks.filter(
    (task) => task.date === todaysDate && task.active,
  )
  const allTasks = tasks.filter((task) => task.active)

  switch (option) {
    case 'today':
      tasks = todaysTasks.map((task) => <Task key={task.id} task={task} />)
      break
    case 'important':
      tasks = importantTasks.map((task) => <Task key={task.id} task={task} />)
      break
    case 'all':
      tasks = allTasks.map((task) => <Task key={task.id} task={task} />)
      break
    case 'completed':
      tasks = completedTasks.map((task) => <Task key={task.id} task={task} />)
      break
    case 'day':
      const { date } = location.state
      const specificDayTasks = tasks.filter((task) => task.date === date)
      tasks = specificDayTasks.map((task) => <Task key={task.id} task={task} />)
      break
    default:
      return null
  }

  const message = <span className="message">Nothing here yet...</span>
  return (
    <>
      <div className="header">
        <h1>{option !== 'day' ? props.title : location.state.date}</h1>
      </div>
      <div className="tasksWrapper">{tasks.length !== 0 ? tasks : message}</div>
    </>
  )
}

export default Layout
