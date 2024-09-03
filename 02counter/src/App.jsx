import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter , setCounter]  useState(15)
   //let counter = 15


   const addValue = () => {
    console.log("clicked" , Math.random());
    counter = counter + 1
   }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>
    
    <button onClick={addValue} >Add value</button>
    <br></br>
    <button >remove value</button>
    </>
  )
}

export default App
