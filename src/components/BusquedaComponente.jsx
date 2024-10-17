import React, {useState, useEffect} from 'react'

const BusquedaComponente = () => {

  const [users, setusers] = useState([]);
  const [search, setSearch] = useState("");

  const URL = 'https://jsonplaceholder.typicode.com/users';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    
  }

  useEffect(() => {
    showData();
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setusers(data))
  }, [])

  const buscar = (e) => {
    setSearch(e.target.value);
  }
  
 
  const resultado = !search ? users : users.filter( (dato) => 
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  
  return (
    <div>

    <input value={search} onChange={buscar} type="text" placeholder="Buscar" className='form-control'/>

      <table className='table table-striped table-hover mt-5 shadow-lg text-center'>
      <thead>

        <tr className='table-warning'>
          <th>Nombre</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody className='table-light table-dark'>
        {resultado.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
      </table>

    </div>
  )
}

export default BusquedaComponente