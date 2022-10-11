import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ReactAudioPlayer from "react-audio-player";
import test from "./test.mp3";
import testimg from "../UI/SliderImages/bg1.jpg";
import ServicesSlider from "../UI/ServicesSlider";
import formServices from "../UI/OtherImages/formServices.png";
import slideshowServices from "../UI/OtherImages/slideshowServices.png";

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
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=b">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(70)} eventKey="#id=c">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=d">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=e">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=f">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=g">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=h">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=i">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=j">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=k">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=l">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=m">
              <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
              <ReactAudioPlayer className="mt-4" src={test} controls />
            </Tab.Pane>
            <Tab.Pane eventKey="#id=n">
              <div className="accordion d-flex" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <img src={formServices} width="10%" alt="Form logo" />
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ServicesSlider
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
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <img
                        src={slideshowServices}
                        width="18%"
                        alt="Slideshow logo"
                      />
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      This is the second item's accordion body.
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
