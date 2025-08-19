import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import CardForm from './components/CardForm.jsx';

function handleClick() {
  alert("Hello, World!");
}


function handleChange(event) {
  console.log(event.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("Form submitted");
}

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  const [user, setUser] = useState({ name: "Simone", age: 30 });

  const updateUserName = () => {
    const updateUser = { ...user, name: "Anna" };
    setUser(updateUser);
  };


  const addCity = (city) => {
    setCities([...cities, city]);
  };

  const [cities, setCities] = useState([
    { 
      id: 0,
      title: "Tokyo",
      imgURL: "https://images.pexels.com/photos/3779837/pexels-photo-3779837.jpeg",
      isVisited: false,
      description: "This is a description of the card of Tokyo."    
    },
    {
      id: 1,
      title: "New York",
      imgURL: "https://images.pexels.com/photos/1796505/pexels-photo-1796505.jpeg",
      isVisited: true,
      description: "This is a description of the card of New York"
    },
    {
      id: 2,
      title: "Rome",
      imgURL: "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg",
      isVisited: true,
      description: "This is a description of the card of Rome"
    },
    {
      id: 3,
      title: "Paris",
      imgURL: "https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg",
      isVisited: true,
      description: "This is a description of the card of Paris"
    }
  ]);



  return (
    <>
      <CardForm addCity={addCity}></CardForm>
        <div className="grid grid-cols-4 gap-10 p-4 m-1">

      {cities
      .filter(city => city.isVisited)
      .map(city => (
        <Card 
          key={city.id}
          isVisited={city.isVisited}
          title={city.title} 
          imgURL={city.imgURL}>
          {city.description}
        </Card>
      ))}
      </div>
   
      
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <button onClick={handleClick} >alert</button>
        <input onChange={handleChange}/>

        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
