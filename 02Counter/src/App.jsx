import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  }


  return (
    <div className="counter-app-container">
      <h2 className="counter-app-heading">Counter App!</h2>
      <p className='counter-app-text'>Count {count}</p>
      <button onClick={increament} className='btn'>Count Up</button>
      <button onClick={decrement} className='btn'>Count Down</button>
    </div>
  )
}

export default App
