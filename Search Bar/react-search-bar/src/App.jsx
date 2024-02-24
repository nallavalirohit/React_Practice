import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <SearchBar />
        <div>SearchBar Results</div>
      </div>
    </div>
  )
}

export default App
