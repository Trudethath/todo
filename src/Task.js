import React from 'react'

function Task(props) {
  return (
    <div className="task">
      <span className="h3-background"></span>
      <h3>{props.task.title}</h3>
    </div>
  )
}

export default Task
