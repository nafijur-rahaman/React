import { useState } from "react"


function App() {
  const [color,setColor]=useState("tomato")

  return (
    <div style={{backgroundColor:color}} className="w-full h-screen duration-200 ">
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
<button onClick={()=> setColor("red")} style={{backgroundColor:"red"}} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg" >Red</button>
<button onClick={()=> setColor("green")} style={{backgroundColor:"green"}} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg" >Green</button>
<button onClick={()=> setColor("blue")} style={{backgroundColor:"blue"}} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg" >blue</button>
<button onClick={()=> setColor("yellow")} style={{backgroundColor:"yellow"}} className=" outline-none px-4 py-1 text-black rounded-full shadow-lg" >Yellow</button>
</div>
  </div>

    </div>
  )
}

export default App
