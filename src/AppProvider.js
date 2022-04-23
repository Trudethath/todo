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
    {
      id: 2,
      title: 'zadanie3',
      description: 'xxx',
      date: '2022-04-23',
      active: true,
      important: false,
      finishDate: null,
    },
    {
      id: 3,
      title: 'zadanie4',
      description: 'qqq',
      date: '2022-02-14',
      active: false,
      important: false,
      finishDate: '2022-02-14',
    },
  ])
  return <AppContext.Provider value={{ tasks }}>{children}</AppContext.Provider>
}

export default AppProvider
