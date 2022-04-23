import React from 'react'
import Task from '../Task'

function Layout(props) {
  const tasks = props.tasks.map((task) => <Task key={task.id} task={task} />)

  return (
    <>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="tasksWrapper">{tasks}</div>
    </>
  )
}

export default Layout
