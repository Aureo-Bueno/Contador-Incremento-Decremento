import './App.css';

import { useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador: { counter }</h1>
        <div>
          <div>
            <button onClick={(() => dispatch({type:"INCREMENT"}))}>INCREMENTO</button>
          </div>
          <div>
            <button onClick={(() => dispatch({type:"DECREMENT"}))}>DECREMENTO</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
