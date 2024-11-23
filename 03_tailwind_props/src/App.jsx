import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black rounded-lg p-2.5 mb-7'>Hello Nafis</h1>
      <Card cardTitle="visit me"/>
      <Card cardTitle="Click Me" title="Apple Watch"/>
    </>

  )
}

export default App
