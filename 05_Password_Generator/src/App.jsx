import { useState,useCallback,useEffect, useRef} from 'react'


function App() {

  const [length, setLength]=useState(8)
  const [numberAllow, setNumberAllow]=useState(false);
  const [characterAllow, setCharacterAllow]=useState(false);
  const [password, setPassword]=useState("")
  const passwordRef = useRef(null)
  

  const passwordGenerator= useCallback(()=>{ //useCallback for memoization and optimization

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     if(numberAllow) {
      str+="0123456789"
    }
     if(characterAllow){
      str+="!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i <=length; i++) {
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
  setPassword(pass)
    
  }, [length,numberAllow,characterAllow,setPassword])


  const copyPass= useCallback(()=>{

    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  
    alert("password copy to your clipboard")
   
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllow,characterAllow,passwordGenerator]) //use useEffect for if any change call function

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> 
      
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      
        <input 
          type='text' value={password} className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
          
          <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
         
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>length :{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={()=>{
              setNumberAllow((prev)=>!prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={characterAllow}
            id="characterInput"
            onChange={()=>{
              setCharacterAllow((prev)=>!prev)
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
