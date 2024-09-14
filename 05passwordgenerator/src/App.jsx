import { useState , useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setPassword] = useState("")
 
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%&:;/"
  } , [length , numberAllowed , charAllowed , setPassword])
  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
