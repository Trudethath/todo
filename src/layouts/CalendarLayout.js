import React, { useState } from 'react'
import CalendarTile from '../CalendarTile'

function Layout(props) {
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth())

  const firstDayOfTheMonth = new Date(year, month, 0).getDay()

  let currentMonthCount = 1 - firstDayOfTheMonth
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return new Date(year, month, currentMonthCount).toISOString().slice(0, 10)
    })
  })

  const Calendar = daysMatrix.map((dates) =>
    dates.map((date) => {
      return <CalendarTile key={date} date={date} />
    }),
  )

  return (
    <>
      <div className="header">
        <h1>{props.title}</h1>
      </div>

      <div className="calendarWrapper">
        <ol className="day-name-row">
          <li className="day-name">Mon</li>
          <li className="day-name">Tue</li>
          <li className="day-name">Wed</li>
          <li className="day-name">Thu</li>
          <li className="day-name">Fri</li>
          <li className="day-name">Sat</li>
          <li className="day-name">Sun</li>
        </ol>
        <ol className="calendarTable">{Calendar}</ol>
      </div>
    </>
  )
}

export default Layout
