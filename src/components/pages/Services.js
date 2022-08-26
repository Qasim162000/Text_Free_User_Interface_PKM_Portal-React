import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export default function Services(props) {
  document.title = "PKM Punjab - Our Services";
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
              Character Certificate
            </ListGroup.Item>
            <ListGroup.Item action href="#id=b">
              General Police Verification
            </ListGroup.Item>
            <ListGroup.Item action href="#id=c">
              Learner Driving License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=d">
              Driving License Renewal
            </ListGroup.Item>
            <ListGroup.Item {...props.changeProgress(50)} action href="#id=e">
              International Driving License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=f">
              Duplicate Driving License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=g">
              Endorsement of a License
            </ListGroup.Item>
            <ListGroup.Item action href="#id=h">
              Employee Registration
            </ListGroup.Item>
            <ListGroup.Item action href="#id=i">
              Tenants Registration
            </ListGroup.Item>
            <ListGroup.Item action href="#id=j">
              Vehicle Verification
            </ListGroup.Item>
            <ListGroup.Item action href="#id=k">
              Loss Report
            </ListGroup.Item>
            <ListGroup.Item action href="#id=l">
              Crime Reports
            </ListGroup.Item>
            <ListGroup.Item action href="#id=m">
              Women Violence Report
            </ListGroup.Item>
            <ListGroup.Item action href="#id=n">
              Copy of FIR
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
            <Tab.Pane eventKey="#id=j">Tab 10</Tab.Pane>
            <Tab.Pane eventKey="#id=k">Tab 11</Tab.Pane>
            <Tab.Pane eventKey="#id=l">Tab 12</Tab.Pane>
            <Tab.Pane eventKey="#id=m">Tab 13</Tab.Pane>
            <Tab.Pane {...props.changeProgress(100)} eventKey="#id=n">
              Tab 14
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
