import React, { useState } from 'react'
import SmallCalendarTile from './SmallCalendarTile'

function SmallCalendar(props) {
  const [date, setDate] = useState(new Date())
  const year = date.getFullYear()
  const month = date.getMonth()

  const firstDayOfTheMonth = new Date(year, month, 0).getDay()

  let currentMonthCount = 1 - firstDayOfTheMonth
  const currentMonthNumber = date.toLocaleString().slice(2, 4)

  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return new Date(year, month, currentMonthCount).toISOString().slice(0, 10)
    })
  })

  const SmallCalendar = daysMatrix.map((dates) =>
    dates.map((date) => {
      const monthOfDate = date.slice(5, 7)

      return (
        <SmallCalendarTile
          notvisible={monthOfDate !== currentMonthNumber}
          key={date}
          date={date}
          sendDate={props.sendDate}
        />
      )
    }),
  )

  const changeYear = (value) => {
    console.log(date)
    setDate(new Date(year + value, month))
  }

  const changeMonth = (value) => {
    setDate(new Date(year, month + value))
  }

  return (
    <>
      <div>
        <button onClick={() => changeYear(-1)}> -1y </button>
        <button onClick={() => changeYear(1)}> +1y </button>

        <button onClick={() => changeMonth(-1)}> -1m </button>
        <button onClick={() => changeMonth(1)}> +1m </button>
      </div>
      <div className="smallCalendar">
        <ol>
          <li className="small-day-name">Mo</li>
          <li className="small-day-name">Tu</li>
          <li className="small-day-name">We</li>
          <li className="small-day-name">Th</li>
          <li className="small-day-name">Fr</li>
          <li className="small-day-name">Sa</li>
          <li className="small-day-name">Su</li>
          {SmallCalendar}
        </ol>
      </div>
    </>
  )
}

export default SmallCalendar
