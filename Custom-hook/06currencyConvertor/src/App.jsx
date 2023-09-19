import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className='text-3xl bg-red-500 text-white text-center'>Hello World</h1>
  )
}


export default App
