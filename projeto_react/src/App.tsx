import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Example3Component from './components/Example3'

function App() {

  const [count, setCount] = useState(0)

  return (
    
    <Example3Component />

  )

}

export default App
