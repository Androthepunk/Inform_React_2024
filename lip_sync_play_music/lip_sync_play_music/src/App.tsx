import { useState } from 'react'
import './App.css'
import Listen_again from './Compoents/Listen_again'
import QuickPicks from './Compoents/QuickPicks'
import RecommendedAlbums from './Compoents/RecommendedAlbums'
import Similar_To from './Compoents/Similar_To'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Sonidos + Confort</h2>
      <div className='App' >        
        <div className="card">
          <Listen_again/>
          <QuickPicks/>
          <button onClick={() => setCount((count) => count + 1)}>
            Add this to playlist {count}
          </button>
          <RecommendedAlbums/>
          <button onClick={() => setCount((count) => count + 1)}>
            Add this to favorites {count}
          </button>
        <Similar_To/>
          <button onClick={() => setCount((count) => count + 1)}>
            Add to playlist {count}
          </button>
        
          
        </div>
       
      </div>
    </>
  )
}

export default App
