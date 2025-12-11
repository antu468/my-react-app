import { use, useState } from 'react' //hook method
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter , setCounter] = useState(15) //[variable, fumction]

  //let counter = 15




  const addvalue=()=>{
    console.log("clicked", counter);
    //counter = counter+1
    setCounter(counter+1)
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
