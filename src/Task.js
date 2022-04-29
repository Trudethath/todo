import React, { useContext } from 'react'
import { AppContext } from './AppProvider'
import { IoMdRemove } from 'react-icons/io'
import { MdDone } from 'react-icons/md'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

function Task(props) {
  const { id, title, active, important, description } = props.task
  const { changeImportantStatus, removeTask } = useContext(AppContext)
  return (
    <div className="task">
      <div className="taskHeader">
        {important ? (
          <AiFillStar
            className="important golden"
            onClick={() => changeImportantStatus(id)}
          />
        ) : (
          <AiOutlineStar
            className="important"
            onClick={() => changeImportantStatus(id)}
          />
        )}
        <h3>{title}</h3>
        <div className="buttonsWrapper">
          {active ? <MdDone className="taskButton" /> : null}

          <IoMdRemove
            className="taskButton danger"
            onClick={() => removeTask(id)}
          />
        </div>
      </div>
      <div className="taskContent">{description}</div>
    </div>
  )
}

export default Task
