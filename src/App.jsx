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
    <Card title="Tokyo" imgURL="https://images.pexels.com/photos/3779837/pexels-photo-3779837.jpeg">
    This is a description of the card of Tokyo.</Card>
    <Card title="New York" imgURL="https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg">
    This is a description of the card of New York</Card>

    <Card title="Rome" imgURL="https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg">
    This is a description of the card of Rome</Card>
    <Card title="Paris" imgURL="https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg">
    This is a description of the card of Paris</Card>
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
