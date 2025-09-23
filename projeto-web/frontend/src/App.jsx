import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Hot reaload
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} or not or is it hello WORD
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR this is a hot reloadgh
        </p>
      </div>
      <p className="read-the-docs">
        don't Click on the Vite and React logos to learn more or not or do or don't

      </p>
    </>
  )
}

export default App
