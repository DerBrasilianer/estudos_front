import './App.css'
import MyComponent from './components/my-component'

function App() {

  const clickRecieved = () => {

    console.log('Click Recieved')

  }

  return (
    
    <>
      
      <MyComponent identifyClick={clickRecieved}>
        Hello, World!
      </MyComponent>

    </>

  )

}

export default App
