import React, { useContext, useState } from 'react'
import SmallCalendar from '../SmallCalendar'
import { AppContext } from '../AppProvider'
function Layout(props) {
  const { addTask } = useContext(AppContext)

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
      case 'important':
        setImportant(checked)
        break
      default:
        return null
    }
  }

  const sendDate = (date) => {
    setDate(date)
  }

  const submitForm = (e) => {
    e.preventDefault()
    // basic validation
    if (
      title.length > 2 &&
      title.length < 10 &&
      description.length < 20 &&
      date !== ''
    ) {
      addTask(title, description, date, isImportant)
      // clearing inputs
      setTitle('')
      setDescription('')
      setDate('')
      setImportant(false)
    } else {
      alert('invalid input')
    }
  }

  return (
    <>
      <div className="header center">
        <h1>{props.title}</h1>
      </div>
      <div className="fill">
        <div className="addTask">
          <form>
            <div>
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
                <div>
                  <label htmlFor="important">Important</label>
                  <input
                    id="important"
                    type="checkbox"
                    checked={isImportant}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div>
                <span>Date: {date === '' ? 'YYYY-M-D' : date}</span>
              </div>

              <input
                className="formSubmit"
                type="submit"
                onClick={submitForm}
                value="Add"
              />
            </div>
          </form>
          <SmallCalendar sendDate={sendDate} />
        </div>
      </div>
    </>
  )
}

export default Layout
