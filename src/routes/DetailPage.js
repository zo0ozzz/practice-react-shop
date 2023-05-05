import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// import styled from "styled-components";

function DetailPage(props) {
  const { id } = useParams();
  const findProudct = props.product.find((item) => item.id === Number(id));
  const [display, setDisplay] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (isNaN(inputValue)) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`/img/시루0.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProudct.title}</h4>
          <p>{findProudct.content}</p>
          <p>{findProudct.price.toLocaleString()}원</p>
          {display ? <div>경고: 숫자만 입력하세요.</div> : null}
          <input
            type="text"
            placeholder="수량 입력"
            onChange={(event) => {
              let inputValue = event.target.value;
              setInputValue(Number(inputValue));
            }}
          />{" "}
          <br />
          <button className="btn btn-danger start end">주문하기</button>
        </div>
      </div>
      <div>
        <ListExample setTab={setTab} />
        <button
          onClick={() => {
            setTab(0);
          }}
        >
          하나
        </button>
        <button
          onClick={() => {
            setTab(1);
          }}
        >
          둘
        </button>
        <button
          onClick={() => {
            setTab(2);
          }}
        >
          셋
        </button>
        <Div content={tab}></Div>
      </div>
    </div>
  );
}

function Div(props) {
  if (props.content == 0) {
    return <div>{props.content}</div>;
  } else if (props.content == 1) {
    return <div>{props.content}</div>;
  } else if (props.content == 2) {
    return <div>{props.content}</div>;
  }
}

function ListExample({ setTab }) {
  return (
    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link
          eventKey="link0"
          onClick={() => {
            setTab(0);
          }}
        >
          버튼0
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link1"
          onClick={() => {
            setTab(1);
          }}
        >
          버튼1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link2"
          onClick={() => {
            setTab(2);
          }}
        >
          버튼2
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default DetailPage;
