import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    if (counter == 0) {
      return;
    }
    setCounter(counter - 1)
    
  }


  return (
    <>
      <div>
          <button onClick={increase}>+</button>
          <p>{counter}</p>
          <button onClick={decrease}>-</button>
      </div>
    </>
  )
}

export default App
