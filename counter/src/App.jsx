import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15


  const addvalue=()=>{
    console.log("Value added", Math.random());
  }
  return (
    <>
      <h1>I love React</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={addvalue}
      >Add Value</button>
      <br/>
      <button>Decrease Value</button>
    </>
  )

}
export default App
