import React, {useState, useEffect} from 'react'

const BusquedaComponente = () => {

  const [users, setusers] = useState([]);
  const [search, setSearch] = useState("");

  const URL = 'https://jsonplaceholder.typicode.com/users';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(showData);
  }

  showData();
  useEffect(() => {
    showData();
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setusers(data))
  }, [])

  
  
  
  
  return (
    <div>BusquedaComponente</div>
  )
}

export default BusquedaComponente