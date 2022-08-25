import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function Services(props) {
  return (
    <Tab.Container id="list-group-tabs" defaultActiveKey={props.sendLink}>
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#id=a">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#id=b">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#id=a">Tab 1</Tab.Pane>
            <Tab.Pane eventKey="#id=b">Tab 2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Services;
