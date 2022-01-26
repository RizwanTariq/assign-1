import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import ListContext from '../context/ListContext'

function Header() {
  const { list, handleClick } = useContext(ListContext)
  return (
    <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {list &&
              list.map((item, index) => (
                <button
                  key={index}
                  type='button'
                  className='btn'
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
