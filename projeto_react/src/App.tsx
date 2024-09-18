import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const [count, setCount] = useState(0)

  return (
    
    <>
      
      <div>
        
        <a href='https://vitejs.dev' target='_blank'>
          <img src='../public/vite.svg' className='logo' alt='Vite logo' />
        </a>

        <a href='https://react.dev' target='_blank'>
          <img src='./src/assets/react.svg' className='logo react' alt='React logo' />
        </a>

      </div>

      <h1>Vite + React</h1>

      <Counter count={count} setCount={setCount} />

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>

    </>

  )

}

export default App
