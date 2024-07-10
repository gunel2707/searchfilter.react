import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowHideTExt from './components/task32/ShowHideTExt'
import SearchFilter from './components/task32/SearchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowHideTExt/>
      <SearchFilter/>
    </>
  )
}

export default App
