import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function Myapp(){
  return <h1>Hello I am nafis</h1>
}

const element = React.createElement("a",{href:"www.goggle.com",target:'_blank'},"Click Me");

createRoot(document.getElementById('root')).render(

element
 
)
  