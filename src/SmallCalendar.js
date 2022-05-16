import React, { useState } from 'react'
import SmallCalendarTile from './SmallCalendarTile'

function SmallCalendar(props) {
  const [date, setDate] = useState(new Date())
  const YMDdate =
    new Date().toLocaleDateString().split('.')[2] +
    '-' +
    new Date().toLocaleDateString().split('.')[1] +
    '-' +
    new Date().toLocaleDateString().split('.')[0]
  const [activeTile, setActiveTile] = useState(YMDdate)

  const year = date.getFullYear()
  const month = date.getMonth()
  const monthName = date.toLocaleDateString('en-US', { month: 'short' })

  const firstDayOfTheMonth = new Date(year, month, 0).getDay()

  let currentMonthCount = 1 - firstDayOfTheMonth
  const currentMonthNumber = date.toLocaleString().split('.')[1]

  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return new Date(year, month, currentMonthCount).toISOString().slice(0, 10)
    })
  })

  const setActive = (id) => {
    setActiveTile(id)
  }

  const SmallCalendar = daysMatrix.map((dates) =>
    dates.map((date) => {
      const monthOfDate = date.slice(5, 7)
      return (
        <SmallCalendarTile
          notvisible={monthOfDate !== currentMonthNumber}
          chosenTile={activeTile && true}
          activeTileId={activeTile}
          key={date}
          id={date}
          date={date}
          setActive={setActive}
          sendDate={props.sendDate}
        />
      )
    }),
  )

  const changeMonth = (value) => {
    console.log(value)
    setDate(new Date(year, month + value))
  }

  return (
    <>
      <div className="smallCalendar">
        <span>
          <button onClick={() => changeMonth(-1)}> -1m </button>
          {monthName} {year}
          <button onClick={() => changeMonth(1)}> +1m </button>
        </span>
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
