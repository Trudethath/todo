import React, { useRef, useState } from 'react'

function SmallCalendarTile(props) {
  const { id, date, notvisible, activeTileId } = props
  const day = date.slice(8, 10)

  const handleClick = (date, id) => {
    props.setActive(id)
    props.sendDate(date)
  }

  return (
    <>
      <li
        id={id}
        className="smallTile"
        activetile={activeTileId === date ? 'true' : undefined}
        notvisible={notvisible ? 'true' : undefined}
        onClick={() => handleClick(date, id)}
      >
        {day}
      </li>
    </>
  )
}

export default SmallCalendarTile
