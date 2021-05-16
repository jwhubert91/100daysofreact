import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div>
      <header>
        <h1>Counter using React Redux Hooks</h1>
        <p>by{' '}
          <a href='https://twitter.com/jwhubert91'>@jwhubert91</a>
        </p>
      </header>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

// export default connect(state =>({count: state}), {increment,decrement})(App);
export default App