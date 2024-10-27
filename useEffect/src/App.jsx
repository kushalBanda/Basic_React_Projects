import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count, color])

  function addCount() {
    setCount(c => c + 1);
  }

  function subtractCount() {
    setCount(c => c - 1);
  }

  function changeColor() {
    setColor(c => c === "green" ? "red" : "green");
  }

  return (
    <>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Add</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default App
