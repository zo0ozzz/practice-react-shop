import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./routes/DetailPage.js";
import axios from "axios";

function App() {
  let [product, setProduct] = useState(data);
  let navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Banner />
              <SortingButton product={data} setProduct={setProduct} />
              <ProductList product={product} />
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((res) => res.data)
                    .then((res) => {
                      let copy = [...product];
                      res.forEach((item) => {
                        item.title = `시루${item.id}`;
                        item.content = `시루특공대 넘버${item.id}`;
                        item.price = Number(`${item.id}0000`);

                        copy.push(item);

                        setProduct(copy);
                      });
                    });

                  // fetch("https://codingapple1.github.io/shop/data2.json")
                  //   .then((res) => res.json())
                  //   .then((res) => {
                  //     let copy = [...product];
                  //     res.forEach((item) => {
                  //       item.title = `시루${item.id}`;
                  //       item.content = `시루특공대 넘버${item.id}`;
                  //       item.price = Number(`${item.id}0000`);

                  //       copy.push(item);

                  //       setProduct(copy);
                  //   });
                  // });
                }}
              >
                버튼
              </button>
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <>
              <NavBar />
              <DetailPage product={data} />
            </>
          }
        />

        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

function NavBar() {
  let navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" className="navBar">
      <Navbar.Brand href="#home">즉시쇼핑</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={() => navigate("/")}>홈</Nav.Link>
        <Nav.Link onClick={() => navigate("/detail")}>상세 페이지</Nav.Link>
      </Nav>
    </Navbar>
  );
}

function Banner() {
  return (
    <div
      className="main-bg"
      style={{ backgroundImage: "url(/img/신세계.png)" }}
    ></div>
  );
}

function ProductList(props) {
  let arr = [];

  props.product.map((item, index) => {
    arr.push(
      <Link to={`/detail/${item.id}`} className="상품" key={item.id}>
        <Col sm>
          <img src={`/img/시루0.jpg`} alt={`상품${item.id}`} />
          <h4 style={{ fontSize: "120%" }}>{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price.toLocaleString()}원</p>
        </Col>
      </Link>
    );
  });

  return (
    <Container className="productList">
      <Row className="상품들">{arr}</Row>
    </Container>
  );
}

function SortingButton(props) {
  return (
    <button
      onClick={() => {
        let copy = [...props.product];
        copy.sort((a, b) => b.id - a.id);

        props.setProduct(copy);
      }}
    >
      재정렬
    </button>
  );
}

export default App;
