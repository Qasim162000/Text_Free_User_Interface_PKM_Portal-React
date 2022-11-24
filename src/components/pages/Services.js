import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ServicesAccordion from "../UI/ServicesAccordion";

export default function Services(props) {
  document.title = "PKM Punjab - Our Services";
  const myStyle = {
    padding: "70px 0px",
    justifyContent: "center",
    margin: "auto",
  };
  return (
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs"
      defaultActiveKey={props.link}
    >
      <Row>
        <Col sm={3}>
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
        <Col sm={9}>
          <Tab.Content className="col-11" style={myStyle}>
            <Tab.Pane eventKey="#id=a">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=b">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(70)} eventKey="#id=c">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=d">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=e">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=f">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=g">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=h">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=i">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=j">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=k">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=l">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=m">
              <ServicesAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=n">
              <ServicesAccordion {...props.changeProgress(100)} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
