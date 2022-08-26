import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function Centers(props) {
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
            <Tab.Pane eventKey="#attock">Meow</Tab.Pane>
            <Tab.Pane eventKey="#bahawalnagar">Meow</Tab.Pane>
            <Tab.Pane eventKey="#bahawalpur">Meow</Tab.Pane>
            <Tab.Pane eventKey="#bhakkar">Meow</Tab.Pane>
            <Tab.Pane eventKey="#chakwal">Meow</Tab.Pane>
            <Tab.Pane eventKey="#chiniot">Meow</Tab.Pane>
            <Tab.Pane eventKey="#dg-khan">Meow</Tab.Pane>
            <Tab.Pane eventKey="#faisalabad">Meow</Tab.Pane>
            <Tab.Pane eventKey="#gujranwala">Meow</Tab.Pane>
            <Tab.Pane eventKey="#gujrat">Meow</Tab.Pane>
            <Tab.Pane eventKey="#hafizabad">Meow</Tab.Pane>
            <Tab.Pane {...props.changeProgress(80)} eventKey="#jhang">
              Meow
            </Tab.Pane>
            <Tab.Pane eventKey="#jhelum">Meow</Tab.Pane>
            <Tab.Pane eventKey="#kasur">Meow</Tab.Pane>
            <Tab.Pane eventKey="#khanewal">Meow</Tab.Pane>
            <Tab.Pane eventKey="#khushab">Meow</Tab.Pane>
            <Tab.Pane eventKey="#lahore">Meow</Tab.Pane>
            <Tab.Pane eventKey="#layyah">Meow</Tab.Pane>
            <Tab.Pane eventKey="#lodhran">Meow</Tab.Pane>
            <Tab.Pane eventKey="#mandi-bahauddin">Meow</Tab.Pane>
            <Tab.Pane eventKey="#mianwali">Meow</Tab.Pane>
            <Tab.Pane eventKey="#multan">Meow</Tab.Pane>
            <Tab.Pane eventKey="#muzzafargarh">Meow</Tab.Pane>
            <Tab.Pane eventKey="#nankana-sb">Meow</Tab.Pane>
            <Tab.Pane eventKey="#narowal">Meow</Tab.Pane>
            <Tab.Pane eventKey="#okara">Meow</Tab.Pane>
            <Tab.Pane eventKey="#pakpattan">Meow</Tab.Pane>
            <Tab.Pane eventKey="#rahim-yar-khan">Meow</Tab.Pane>
            <Tab.Pane eventKey="#rajanpur">Meow</Tab.Pane>
            <Tab.Pane eventKey="#rawalpindi">Meow</Tab.Pane>
            <Tab.Pane eventKey="#sahiwal">Meow</Tab.Pane>
            <Tab.Pane eventKey="#sargodha">Meow</Tab.Pane>
            <Tab.Pane eventKey="#sheikhupura">Meow</Tab.Pane>
            <Tab.Pane eventKey="#sialkot">Meow</Tab.Pane>
            <Tab.Pane eventKey="#toba-tek-singh">Meow</Tab.Pane>
            <Tab.Pane {...props.changeProgress(100)} eventKey="#vehari">
              Meow
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Centers;
