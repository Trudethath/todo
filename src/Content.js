import React, { useContext } from 'react'
import { AppContext } from './AppProvider'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import TasksLayout from './layouts/TasksLayout'
import HomeLayout from './layouts/HomeLayout'
import CalendarLayout from './layouts/CalendarLayout'
import AddTaskLayout from './layouts/AddTaskLayout'

function Content() {
  const { tasks } = useContext(AppContext)
  return (
    <Routes>
      <Route path="/" element={<HomeLayout title="Home" />} />
      <Route
        exact
        path="/today"
        element={<TasksLayout title="Today" tasks={tasks} option="today" />}
      />
      <Route
        exact
        path="/important"
        element={
          <TasksLayout title="Important" tasks={tasks} option="important" />
        }
      />
      <Route
        exact
        path="/all"
        element={<TasksLayout title="All" tasks={tasks} option="all" />}
      />
      <Route
        exact
        path="/calendar"
        element={<CalendarLayout title="Calendar" />}
      />
      <Route
        exact
        path="/completed"
        element={
          <TasksLayout title="Completed" tasks={tasks} option="completed" />
        }
      />
      <Route
        exact
        path="/addTask"
        element={<AddTaskLayout title="Add task" />}
      />
      <Route
        exact
        path="/day"
        element={<TasksLayout title="" tasks={tasks} option="day" />}
      />
    </Routes>
  )
}

export default Content
