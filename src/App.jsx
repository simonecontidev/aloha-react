import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <div className="grid grid-cols-4 gap-10 p-4">
    <Card></Card>
    <Card></Card>

    <Card></Card>
    <Card></Card>
</div>
      
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
