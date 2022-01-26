import { useContext, useState } from 'react'
import ListContext from '../context/ListContext'

function Form() {
  const { handleSubmit } = useContext(ListContext)
  const [text, setText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(text)
    setText('')
  }
  return (
    <form onSubmit={onSubmit}>
      <fieldset className='m-10'>
        <div className='form-group'>
          <label htmlFor='text' className='form-label mt-4'>
            Text
          </label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-describedby='text'
            className='form-control mb-3'
            placeholder='Enter Text'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </fieldset>
    </form>
  )
}

export default Form
