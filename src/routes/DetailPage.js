import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import styled from "styled-components";

function DetailPage(props) {
  const { id } = useParams();
  const findProudct = props.product.find((item) => item.id === Number(id));
  const [display, setDisplay] = useState(false);
  const [inputValue, setInputValue] = useState("");
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
