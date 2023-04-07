import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [users, setUsers] = useState({})
  const { id } = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/` + id.replace(':', '');

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [id])

  return (
    <>
      <h1>Detail Dentist {users.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr className='tableCategories'>
          <td>Nombre</td>
          <td>Email</td>
          <td>Teléfono</td>
          <td>Website</td>
        </tr>
        <tr className='tableData'>
          <td>{users && users.name}</td>
          <td>{users && users.email}</td>
          <td>{users && users.phone}</td>
          <td>{users && users.website}</td>
        </tr>
      </table>

    </>
  )
}

export default Detail