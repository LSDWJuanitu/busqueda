import React, {useState, useEffect} from 'react'

const ActividadComponent = () => {
  const [users, setusers] = useState([]);
  const [search, setSearch] = useState("");
  

    const buscar = (e) => {
      setSearch(e.target.value);
      console.log(search);
    }
  
    const cargarDatos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${search}`);
      const data = await response.json();
      console.log(data);
    

    useEffect(() => {
      cargarDatos();
    }, [])
    
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/${search}')
    .then(response => response.json())
    .then(data => setusers(data))
  }, [])

    
  }

  const resultado = !search ? users : users.filter( (dato) => 
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

   return (
      <div>
        <div>
          <h2>Selecciona una lista JSON</h2>
        </div>
        
        <div className='d-inline-flex p-3 text-center'>
           
        <select name="listas" id="listas" onChange={buscar} className='form-control'>
          <option value="users">Users</option>
          <option value="posts">Posts</option>
          <option value="comments">Comments</option>
          <option value="albums">Albums</option>
          <option value="photos">Photos</option>
          <option value="todos">Todos</option>
        </select>
        
        <button className='btn btn-success' onClick={cargarDatos}>Cargar Datos</button>
           
        </div>
        <div>
          <h2>Busqueda</h2>
        </div>
        <div className='d-inline-flex p-3 text-center'>
    
        
        <input type="text" />
                  
        
        <button className='btn btn-success' onClick={cargarDatos}>Filtro</button>
           
        </div>
        <div>
        <table className='table table-striped table-hover mt-5 shadow-lg text-center'>
            <thead>

              <tr className='table-warning'>
                
                <th>Nombre</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody className='table-light table-dark'>
              
                <tr>
                  <td>Nombre</td>
                  <td>usuario</td>
                </tr>
             
            </tbody>
        </table>
      </div>
      </div>
      )
  }

export default ActividadComponent