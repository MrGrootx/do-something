import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { decrement, increment,incrementByAmmount } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(incrementByAmmount(50))}>INCREMENT</button>
      <br />

      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
};

export default Counter;
