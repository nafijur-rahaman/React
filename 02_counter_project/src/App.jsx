import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter,setCounter]=useState(0)
  const add =()=>{
    

if(counter>=20){
  alert("You cannot increase value upto 20");
}else{
  setCounter(counter+1)
}

  }
  
  const remove =()=>{
    if(counter<=0){
      alert("You cannot decrease value in negative");
    }else{
      setCounter(counter-1)
    }
   
  
  }


  return <>
<button>{counter}</button>
<br></br>
<button onClick={add}>Add</button>
<button onClick={remove}>Remove</button>

<p>{counter}</p>
  </>
}

export default App
