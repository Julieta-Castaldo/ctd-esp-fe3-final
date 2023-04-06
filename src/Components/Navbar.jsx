import React from 'react'
import './Navbar.css'; 
import { Link } from 'react-router-dom'; 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <span>DH Odonto</span>
      <div>
        <Link to='/home'> <h3>Home</h3></Link>
        <Link to='/contact'> <h3>Contact</h3></Link>
        <Link to='/favs'> <h3>Favs</h3></Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar