import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Saurabh",
    age : 20
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwent Test</h1>
     <Card channel="chaiaurcode" someObje={myObj}/>
    <Card/>
    </> 
  )
}

export default App
