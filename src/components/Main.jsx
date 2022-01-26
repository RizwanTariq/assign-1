import { useContext } from 'react'
import { Container, Row, Col, ListGroup, Alert } from 'react-bootstrap'
import ListContext from '../context/ListContext'
import Form from './Form'

function Main() {
  const { clickedItem } = useContext(ListContext)
  return (
    <Container className='main'>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <ListGroup.Item>
                {clickedItem ? clickedItem : 'Clicked Item comes here'}
              </ListGroup.Item>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Form />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
