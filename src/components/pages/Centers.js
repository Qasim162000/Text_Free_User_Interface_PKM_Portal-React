import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import CenterCards from "../UI/CenterCards";
import attock from "..//UI//CenterCardsImages//attock.jpg";

function Centers(props) {
  document.title = "PKM Punjab - Our Centers";
  return (
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs-example"
      defaultActiveKey="#attock"
    >
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#attock">
              Attock
            </ListGroup.Item>
            <ListGroup.Item action href="#bahawalnagar">
              Bahawalnagar
            </ListGroup.Item>
            <ListGroup.Item action href="#bahawalpur">
              Bahawalpur
            </ListGroup.Item>
            <ListGroup.Item action href="#bhakkar">
              Bhakkar
            </ListGroup.Item>
            <ListGroup.Item action href="#chakwal">
              Chakwal
            </ListGroup.Item>
            <ListGroup.Item action href="#chiniot">
              Chiniot
            </ListGroup.Item>
            <ListGroup.Item action href="#dg-khan">
              DG Khan
            </ListGroup.Item>
            <ListGroup.Item action href="#faisalabad">
              Faisalabad
            </ListGroup.Item>
            <ListGroup.Item action href="#gujranwala">
              Gujranwala
            </ListGroup.Item>
            <ListGroup.Item action href="#gujrat">
              Gujrat
            </ListGroup.Item>
            <ListGroup.Item action href="#hafizabad">
              Hafizabad
            </ListGroup.Item>
            <ListGroup.Item action href="#jhang">
              Jhang
            </ListGroup.Item>
            <ListGroup.Item action href="#jhelum">
              Jhelum
            </ListGroup.Item>
            <ListGroup.Item action href="#kasur">
              Kasur
            </ListGroup.Item>
            <ListGroup.Item action href="#khanewal">
              Khanewal
            </ListGroup.Item>
            <ListGroup.Item action href="#khushab">
              Khushab
            </ListGroup.Item>
            <ListGroup.Item action href="#lahore">
              Lahore
            </ListGroup.Item>
            <ListGroup.Item action href="#layyah">
              Layyah
            </ListGroup.Item>
            <ListGroup.Item
              {...props.changeProgress(40)}
              action
              href="#lodhran"
            >
              Lodhran
            </ListGroup.Item>
            <ListGroup.Item action href="#mandi-bahauddin">
              Mandi Bahauddin
            </ListGroup.Item>
            <ListGroup.Item action href="#mianwali">
              Mianwali
            </ListGroup.Item>
            <ListGroup.Item action href="#multan">
              Multan
            </ListGroup.Item>
            <ListGroup.Item action href="#muzzafargarh">
              Muzzafargarh
            </ListGroup.Item>
            <ListGroup.Item action href="#nankana-sb">
              Nankana Sb
            </ListGroup.Item>
            <ListGroup.Item action href="#narowal">
              Narowal
            </ListGroup.Item>
            <ListGroup.Item action href="#okara">
              Okara
            </ListGroup.Item>
            <ListGroup.Item action href="#pakpattan">
              Pakpattan
            </ListGroup.Item>
            <ListGroup.Item action href="#rahim-yar-khan">
              Rahim Yar Khan
            </ListGroup.Item>
            <ListGroup.Item action href="#rajanpur">
              Rajanpur
            </ListGroup.Item>
            <ListGroup.Item action href="#rawalpindi">
              Rawalpindi
            </ListGroup.Item>
            <ListGroup.Item action href="#sahiwal">
              Sahiwal
            </ListGroup.Item>
            <ListGroup.Item action href="#sargodha">
              Sargodha
            </ListGroup.Item>
            <ListGroup.Item action href="#sheikhupura">
              Sheikhupura
            </ListGroup.Item>
            <ListGroup.Item action href="#sialkot">
              Sialkot
            </ListGroup.Item>
            <ListGroup.Item action href="#toba-tek-singh">
              Toba Tek Singh
            </ListGroup.Item>
            <ListGroup.Item {...props.changeProgress(60)} action href="#vehari">
              Vehari
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#attock">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#bahawalnagar">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#bahawalpur">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#bhakkar">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#chakwal">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#chiniot">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#dg-khan">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#faisalabad">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#gujranwala">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#gujrat">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#hafizabad">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(80)} eventKey="#jhang">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#jhelum">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#kasur">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#khanewal">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#khushab">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#lahore">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#layyah">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#lodhran">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#mandi-bahauddin">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#mianwali">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#multan">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#muzzafargarh">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#nankana-sb">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#narowal">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#okara">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#pakpattan">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#rahim-yar-khan">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#rajanpur">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#rawalpindi">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sahiwal">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sargodha">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sheikhupura">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#sialkot">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#toba-tek-singh">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
            <Tab.Pane {...props.changeProgress(100)} eventKey="#vehari">
              <CenterCards
                name={"Attock"}
                time={"Monday - Saturday - 9am to 5pm"}
                location={"https://bit.ly/3KsJDYs"}
                phone={"tel:+92-57-9316440"}
                image={attock}
                center={"#attock"}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Centers;
