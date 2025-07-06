import {useSelector , useDispatch} from 'react-redux';
import { increment, decrement } from './store.js';


export default function CounterWithRedux() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter with Redux</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}