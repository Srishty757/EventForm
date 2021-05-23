import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";

// Reducer
function reducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'INC':
        return { value: state.value + 1 }
      case 'DEC':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

//STATE--
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

//Dispatchers
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'INC' })
store.dispatch({ type:'DEC'});

ReactDOM.render(<App />,document.getElementById('root'));
export default App;