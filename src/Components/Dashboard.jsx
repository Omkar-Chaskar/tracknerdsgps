import {VehicleList, VehicleMap} from "./index";
import {Container, Row, Col} from 'react-bootstrap';

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col><VehicleList /></Col>
        <Col xs={7}><VehicleMap /></Col>
      </Row>
    </Container>
  )
}

export { Dashboard };