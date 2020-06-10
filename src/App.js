import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import Children from './components/Children';
// import {Button} from 'react-boostrap'

function App() {
  let count = useSelector(state => state.count)
  let dispatch =  useDispatch() //This is dispatch
  
  
  // const increaseNum = () => {
  //   dispatch({type:'Increment'}) //dispatch send action, and action
  // }

  const handleChange = (e) => {
    // e.target.value
    dispatch({type: 'SetColor', payload: e.target.value}) //this handle event changes that takes user input to 
  }

  //  dispatch({type:"value",payload:"value"})
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      {/* The format of eventHandling react-redux  dispatch({type:"value",payload:{what value you want to put in here}}) */}
      <button onClick={() => dispatch({type:'Increment', payload: 1})}>Increment</button>
      {/* Everytime you click on Increment React-redux dispatch will dispatch back to its router machine, like that ..*/}
      {count == 0 ? <button disabled='true'>Disabled</button> : <button onClick={() => dispatch({type:'Decrement', payload: 1})}>Decrement</button>}

      <button onClick={() => dispatch({type:'Reset'})}>Reset</button>
      <input onChange={handleChange} placeholder='change color'></input>
      <Children/>
    </div>
  );
}

export default App;
