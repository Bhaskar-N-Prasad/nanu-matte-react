import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () =>{
    if (counter >= 0 &&  counter < 20){
    setCounter(counter+1)
    }
    // console.log("Clicked",counter);
  }
  const  subtractValue = ()=>{
    if (counter > 0 ){
    setCounter(counter-1)
    }
    else{
      setCounter(0)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={subtractValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
