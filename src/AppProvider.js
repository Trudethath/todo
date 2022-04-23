import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: 'zadanie1',
      description: 'asd',
      date: '2022-04-25',
      active: true,
      important: true,
      finishDate: null,
    },
    {
      id: 1,
      title: 'zadanie2',
      description: 'vvv',
      date: '2022-04-29',
      active: true,
      important: true,
      finishDate: null,
    },
  ])
  return <AppContext.Provider value={{ tasks }}>{children}</AppContext.Provider>
}

export default AppProvider
