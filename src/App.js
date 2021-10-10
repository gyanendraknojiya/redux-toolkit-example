import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addAmount } from "./redux/counterSlice";

function App() {
 const [value, setValue] = useState(0);

 const amount = useSelector((state) => state.counterReducer.amount);
 const dispatch = useDispatch();

 const handleIncrement = () => {
  dispatch(increment());
 };

 const handleDecrement = () => {
  dispatch(decrement());
 };

 const handleAddAmount = () => {
  dispatch(addAmount(value));
  setValue(0);
 };

 return (
  <div className="app">
   <div className="text-center">
    <h1>Redux toolkit example</h1>
    <h6>Simple counter</h6>
    <div className="display-2 my-3">{amount}</div>
    <div className="my-4">
     <button className="btn btn-success" onClick={handleIncrement}>
      + Increment
     </button>
     <button className="btn btn-danger ms-2" onClick={handleDecrement}>
      - Decrement
     </button>
    </div>
    <div>
     <input
      type="number"
      className="form-control"
      value={value}
      onChange={(e) => setValue(parseInt(e.target.value))}
     />
     <button
      className="btn btn-primary mx-auto mt-2"
      onClick={handleAddAmount}
     >
      ADD
     </button>
    </div>
   </div>
  </div>
 );
}

export default App;
