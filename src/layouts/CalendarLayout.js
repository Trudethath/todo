import React, { useState } from 'react'
import CalendarTile from '../CalendarTile'
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go'

function Layout() {
  const [date, setDate] = useState(new Date())
  const year = date.getFullYear()
  const month = date.getMonth()

  const firstDayOfTheMonth = new Date(year, month, 0).getDay()

  let currentMonthCount = 1 - firstDayOfTheMonth
  const currentMonthNumber = date.toLocaleString().slice(2, 4)

  // creates 2-dimensional array of whole month
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return new Date(year, month, currentMonthCount).toISOString().slice(0, 10)
    })
  })

  const Calendar = daysMatrix.map((dates) =>
    dates.map((date) => {
      const monthOfDate = date.slice(5, 7)
      return (
        <CalendarTile
          disabled={monthOfDate !== currentMonthNumber && true}
          key={date}
          date={date}
        />
      )
    }),
  )

  const changeYear = (value) => {
    setDate(new Date(year + value, month))
  }

  const changeMonth = (value) => {
    setDate(new Date(year, month + value))
  }

  const currentMonthName = date.toLocaleString('default', { month: 'long' })

  return (
    <>
      <div className="header center">
        <button className="changeButton" onClick={() => changeYear(-1)}>
          <GoArrowSmallLeft className="buttonIcon" />
          <span>{year - 1}</span>
        </button>
        <h1>{year}</h1>
        <button className="changeButton" onClick={() => changeYear(1)}>
          <span>{year + 1}</span>
          <GoArrowSmallRight className="buttonIcon" />
        </button>
      </div>

      <div className="fill">
        <div className="calendarWrapper">
          <div className="monthChange">
            <button onClick={() => changeMonth(-1)}>
              <GoArrowSmallLeft className="smallButtonIcon" />
            </button>
            <span className="monthName">{currentMonthName}</span>
            <button onClick={() => changeMonth(1)}>
              <GoArrowSmallRight className="smallButtonIcon" />
            </button>
          </div>
          <ol>
            <li className="day-name">Mon</li>
            <li className="day-name">Tue</li>
            <li className="day-name">Wed</li>
            <li className="day-name">Thu</li>
            <li className="day-name">Fri</li>
            <li className="day-name">Sat</li>
            <li className="day-name">Sun</li>
            {Calendar}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Layout
