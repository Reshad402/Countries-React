import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries(){
  const [countries,setCountries] = useState([])

  useEffect(  () => {
    
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
         
     }, [])

  return (
    <div>
      <h1>Visiting Every countries of the World</h1>
      <h3>Available Countries:{countries.length}</h3>
      {
                //! countries.map(country =><li>{country.name.common}</li>)
        countries.map(country =>  <ShowProps name={country.name.common} value={country.population}></ShowProps>)
      }
     
    </div>
  )
}

                // ! Props is for the multiple inputs 
function ShowProps(props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h4>Population:{props.value}</h4>
    </div>
  )
}



export default App;
