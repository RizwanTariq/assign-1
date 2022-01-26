import { createContext, useState } from 'react'

const ListContext = createContext()

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([])
  const [clickedItem, setClickedItem] = useState('')
  const handleSubmit = (item) => {
    setList([...list, item])
  }
  const handleClick = (item) => {
    setClickedItem(item)
  }
  return (
    <ListContext.Provider
      value={{ list, clickedItem, handleClick, handleSubmit }}
    >
      {children}
    </ListContext.Provider>
  )
}

export default ListContext
