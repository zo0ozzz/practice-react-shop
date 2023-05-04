import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "./img/신세계.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 시루 from "./img/시루.jpg";
// import 변한다 from "./img/변한다.png";
// import 등산 from "./img/등산.png";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">즉시쇼핑</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <Container>
        <Row className="상품들">
          <Col sm className="상품">
            <img src="/img/시루.jpg" alt="" />
            <h4>상품1</h4>
            <p>상품 설명</p>
          </Col>
          <Col sm className="상품">
            <img src={시루} alt="" />
            <h4>상품2</h4>
            <p>상품 설명</p>
          </Col>
          <Col sm className="상품">
            <img src={시루} alt="" />
            <h4>상품3</h4>
            <p>상품 설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
