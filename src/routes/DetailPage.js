import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Context1 } from "./../App.js";

// import styled from "styled-components";

function DetailPage(props) {
  let { stock, product } = useContext(Context1);

  const { id } = useParams();
  const findProudct = props.product.find((item) => item.id === Number(id));
  const [display, setDisplay] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("end");

  useEffect(() => {
    if (isNaN(inputValue)) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }

    let a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [inputValue, tab]);

  return (
    <div className={`container start ${fade}`}>
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div>
        <ListExample setTab={setTab} />

        <Div
          product={props.product}
          tab={tab}
          fade={fade}
          setFade={setFade}
        ></Div>
      </div>
      {stock}
    </div>
  );
}

function Div({ product, tab, fade, setFade }) {
  let { stock } = useContext(Context1);
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {
        [<div>{product[0].content}</div>, <div>{stock}</div>, <div>3333</div>][
          tab
        ]
      }
    </div>
  );
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
