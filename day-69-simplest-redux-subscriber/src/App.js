import {increment,decrement,double,halve,store} from './redux'
import './App.css';

function App() {

  function handleIncrement() {
    store.dispatch(increment())
  }

  function handleDecrement() {
    store.dispatch(decrement())
  }

  function handleDouble() {
    store.dispatch(double())
  }

  function handleHalve() {
    store.dispatch(halve())
  }

  return (
    <div className="App">
      <div className='App__buttonsContainer'>
        <h1>Simple Redux Control Panel</h1>
        <p>Open your broswer dev tools and watch for console.log() changes upon clicking the buttons. They are minupulating app-wide state directly through Redux.</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleDouble}>Double</button>
        <button onClick={handleHalve}>Halve</button>
      </div>
    </div>
  );
}

export default App;
