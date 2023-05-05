import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./../store.js";
import {
  increaseCount,
  decreaseCount,
  deleteProuduct,
} from "./../store/inCartSlice.js";

function Cart() {
  const inCart = useSelector((state) => state.inCart);
  const user = useSelector((state) => state.user);
  let dispatch = useDispatch();

  return (
    <>
      <CartTable dispatch={dispatch} inCart={inCart} />
      <button
        onClick={() => {
          dispatch(setUser());
        }}
      >
        버튼
      </button>
      {[user.name, user.age]}
    </>
  );
}

function CartTable({ inCart, dispatch }) {
  let html = [];

  inCart.forEach(({ id, name, count }, index) => {
    html.push(
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{id}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>
          <button
            onClick={() => {
              if (count === 1) {
                alert("수량은 1 이상이어야 합니다.");
              } else {
                dispatch(decreaseCount(id));
              }
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(increaseCount(id));
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(deleteProuduct(id));
            }}
          >
            삭제
          </button>
        </td>
      </tr>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>{html}</tbody>
    </Table>
  );
}

export default Cart;
