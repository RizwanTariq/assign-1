import Header from './components/Header'
import Main from './components/Main'
import { ListProvider } from './context/ListContext'

function App() {
  return (
    <ListProvider>
      <Header />
      <Main />
    </ListProvider>
  )
}

export default App
