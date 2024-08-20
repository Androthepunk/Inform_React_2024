import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/*<a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>*/}
      </div>
      <h2>Sonidos + Confort</h2>
      <div className="card">
        <Listen_again/>
        <button onClick={() => setCount((count) => count + 1)}>
          Add this {count}
        </button>
        <ArtistCard/>
        <button onClick={() => setCount((count) => count + 1)}>
          Add this {count}
        </button>
        <AlbumCard/>
        <button onClick={() => setCount((count) => count + 1)}>
          Add this {count}
        </button>
        <PlaybackBar/>
        <button onClick={() => setCount((count) => count + 1)}>
          Previus
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Play/Pause
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Nex
        </button>
        {/*<p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>*/}
      </div>
      {/*<p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  )
}

export default App
