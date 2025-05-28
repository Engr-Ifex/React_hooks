import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')
  const [input, setInput] = useState('')

  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    if (counter == 0) {
      return;
    }
    setCounter(counter - 1)
    
  }
  const handleInput = e => {
    setInput(e.target.value)
  }
  const updateName = () => {
    setName(input)
  }


  return (
    <>
      <div>
          <button onClick={increase}>+</button>
          <p>{counter}</p>
          <button onClick={decrease}>-</button>



          <div>
            
              <label htmlFor="">what is your name</label>
              <input type="text"
                onChange={handleInput}
              />
              <button onClick={updateName}>click me</button>
              <h1>{name}</h1>
            
          </div>
      </div>
    </>
  )
}

export default App
