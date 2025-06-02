import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Anikeet {count}</h1>
      <button style={{padding: '2px', backgroundColor: "black", borderRadius: '5px', color: "white"}} onClick={() => setCount(count+1)}>Click</button>
    </>
  )
}

export default App
