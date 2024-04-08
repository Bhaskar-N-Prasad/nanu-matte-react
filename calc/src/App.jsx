import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [stri, setStri] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)



  const handleClick = (e, val) => {
    let clicked = e.target.value;
    console.log(val); 
    if (clicked !== "=") {
      // console.log(clicked);
      if(val === "Operator"){
        handleOp(clicked)
      }
      else if(val === "Number"){
        
        setStri(prevStri => prevStri + clicked);
        setIsButtonDisabled(false)
      }
      console.log(stri);
      
    }
  }
  const handleOp= (clicked)=>{
    console.log(clicked);
    if(isButtonDisabled === false){
      setStri(prevStri => prevStri + clicked);
      setIsButtonDisabled(true)
    
    }
  }
  const calculate = () =>{
    const leftOp = parseInt(stri.split("+"))
    const rightOp =  parseInt(stri.slice(stri.indexOf("+")+1))
    console.log(leftOp + rightOp);
  }

  const xc = ()=>{
    const numbers = stri.split("+").map(Number);

// Calculate the sum
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Log the sum
console.log(sum);
  }

  return (
    <>
<Button
  name ="1"
  onClickFunction={(e) => handleClick(e, "Number")} 
/>
<Button
  name ="2"
  onClickFunction={(e) => handleClick(e, "Number")} 
/>
<Button
  name ="3"
  onClickFunction={(e) => handleClick(e, "Number")} 
/>
<Button
  name ="4"
  onClickFunction={(e) => handleClick(e, "Number")} 
/>
<Button
  name ="5"
  onClickFunction={(e) => handleClick(e, "Number")} 
/>
<Button
  name ="+"
  onClickFunction={(e) => handleClick(e, "Operator")}
/>
<Button
  name ="="
  onClickFunction={xc}
/>

    </>
  )
}

export default App
