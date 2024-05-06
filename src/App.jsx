 
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'

function App() {
  const [category, setcategory] = useState("general")
  return (
    <>
      
      <Navbar setcategory={setcategory}/>
      <Newsboard category={category}/>
        
    </>
  )
}

export default App
