import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () =>{
    if (counter >= 0 &&  counter < 20){
    setCounter(counter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    //abover state makes counter skip by 4
    /*you do the above operation when u want to inc the current state and do it mutiple times it doesnt make a diff for example 
      setCounter(counter+1) 
      setCounter(counter+1) 
      setCounter(counter+1) 
      setCounter(counter+1)  doing this multiple times doesnt make a difference it compats in a batch and excutes it if it is a simillar job it doesnt it at once 
      but if ur wishing to inc the previuous state numbers then u can do it using call back function 
      like this
setCounter((prevCounter)=>prevcounter+1)
      */
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
