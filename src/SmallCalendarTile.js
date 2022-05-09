import React from 'react'

function SmallCalendarTile(props) {
  const { date, notvisible } = props
  console.log(props)
  const day = date.slice(8, 10)
  return (
    <>
      <li
        className="smallTile"
        notvisible={notvisible ? 'true' : undefined}
        onClick={() => props.sendDate(date)}
      >
        {day}
      </li>
    </>
  )
}

export default SmallCalendarTile
