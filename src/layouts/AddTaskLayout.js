import React, { useContext, useState } from 'react'
import { AppContext } from '../AppProvider'
function Layout(props) {
  const { addTask } = useContext(AppContext)
  const currentDate = new Date().toISOString().slice(0, 10)
  let maxDate = parseInt(currentDate.slice(0, 4)) + 1 + '-12-31'

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [isImportant, setImportant] = useState(false)

  const handleInputs = (e) => {
    let id = e.target.id
    let value = e.target.value
    let checked = e.target.checked

    switch (id) {
      case 'title':
        setTitle(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'date':
        setDate(value)
        break
      case 'important':
        setImportant(checked)
        break
      default:
        return null
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    addTask(title, description, date, isImportant)
    // clearing inputs
    setTitle('')
    setDescription('')
    setDate('')
    setImportant(false)
  }

  return (
    <>
      <div className="header center">
        <h1>{props.title}</h1>
      </div>
      <div className="fill">
        <form className="addTask">
          <div className="textInputs">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                placeholder="title"
                onChange={handleInputs}
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                placeholder="description"
                onChange={handleInputs}
              />
            </div>
          </div>

          <input
            type="date"
            id="date"
            value={date}
            min={currentDate}
            max={maxDate}
            onChange={handleInputs}
          />
          <input
            id="important"
            type="checkbox"
            checked={isImportant}
            onChange={handleInputs}
          />

          <input type="submit" onClick={submitForm} value="Add" />
        </form>
      </div>
    </>
  )
}

export default Layout
