import React, { useContext } from 'react'
import { AppContext } from './AppProvider'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import TasksLayout from './layouts/TasksLayout'
import HomeLayout from './layouts/HomeLayout'
import CalendarLayout from './layouts/CalendarLayout'
import AddTaskLayout from './layouts/AddTaskLayout'

function Content() {
  const { tasks } = useContext(AppContext)
  const todaysDate = new Date().toISOString().slice(0, 10)

  const importantTasks = tasks.filter(
    (task) => task.important === true && task.active === true,
  )

  const completedTasks = tasks.filter((task) => !task.active)
  const todaysTasks = tasks.filter(
    (task) => task.date === todaysDate && task.active,
  )
  const allTasks = tasks.filter((task) => task.active)

  return (
    <Routes>
      <Route path="/" element={<HomeLayout title="Home" />} />
      <Route
        exact
        path="/today"
        element={<TasksLayout title="Today" tasks={todaysTasks} />}
      />
      <Route
        exact
        path="/important"
        element={<TasksLayout title="Important" tasks={importantTasks} />}
      />
      <Route
        exact
        path="/all"
        element={<TasksLayout title="All" tasks={allTasks} />}
      />
      <Route
        exact
        path="/calendar"
        element={<CalendarLayout title="Calendar" />}
      />
      <Route
        exact
        path="/completed"
        element={<TasksLayout title="Completed" tasks={completedTasks} />}
      />
      <Route
        exact
        path="/addTask"
        element={<AddTaskLayout title="Add task" />}
      />
    </Routes>
  )
}

export default Content
