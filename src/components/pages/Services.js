import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export default function Services(props) {
  return (
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs"
      defaultActiveKey={props.link}
    >
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#id=a">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#id=b">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action href="#id=c">
              Link 3
            </ListGroup.Item>
            <ListGroup.Item action href="#id=d">
              Link 4
            </ListGroup.Item>
            <ListGroup.Item {...props.changeProgress(50)} action href="#id=e">
              Link 5
            </ListGroup.Item>
            <ListGroup.Item action href="#id=f">
              Link 6
            </ListGroup.Item>
            <ListGroup.Item action href="#id=g">
              Link 7
            </ListGroup.Item>
            <ListGroup.Item action href="#id=h">
              Link 8
            </ListGroup.Item>
            <ListGroup.Item action href="#id=i">
              Link 9
            </ListGroup.Item>
            <ListGroup.Item action href="#id=j">
              Link 10
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#id=a">Tab 1</Tab.Pane>
            <Tab.Pane eventKey="#id=b">Tab 2</Tab.Pane>
            <Tab.Pane eventKey="#id=c">Tab 3</Tab.Pane>
            <Tab.Pane {...props.changeProgress(70)} eventKey="#id=d">
              Tab 4
            </Tab.Pane>
            <Tab.Pane eventKey="#id=e">Tab 5</Tab.Pane>
            <Tab.Pane eventKey="#id=f">Tab 6</Tab.Pane>
            <Tab.Pane eventKey="#id=g">Tab 7</Tab.Pane>
            <Tab.Pane eventKey="#id=h">Tab 8</Tab.Pane>
            <Tab.Pane eventKey="#id=i">Tab 9</Tab.Pane>
            <Tab.Pane {...props.changeProgress(100)} eventKey="#id=j">
              Tab 10
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
