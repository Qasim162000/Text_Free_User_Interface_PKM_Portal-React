import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ReactAudioPlayer from "react-audio-player";
import test from "./test.mp3";
import testimg from "../UI/SliderImages/bg1.jpg";
import ServicesCardSlider from "../UI/ServicesCardSlider";

export default function Services(props) {
  document.title = "PKM Punjab - Our Services";
  const myStyle = {
    paddingTop: 70,
    margin: "auto",
  };
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
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=a">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=b">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane
              {...props.changeProgress(70)}
              className="col-10"
              style={myStyle}
              eventKey="#id=c"
            >
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=d">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=e">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=f">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=g">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=h">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=i">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=j">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=k">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=l">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=m">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane className="col-10" style={myStyle} eventKey="#id=n">
              <ServicesCardSlider
                img1={testimg}
                img2={testimg}
                img3={testimg}
              />
              <ReactAudioPlayer
                {...props.changeProgress(100)}
                className="mt-4"
                src={test}
                controls
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
