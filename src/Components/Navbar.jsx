import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useUsersState } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { themeState, themeDispatch } = useUsersState();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: 'SWITCH_DARK' })
    } else {
      themeDispatch({ type: 'SWITCH_LIGHT' })
    }
  }

  return (
    <nav style={{ backgroundColor: themeState.navColor }}>
      <span>DH Odonto</span>
      <div>
        <Link to='/home'>
          <h3 style={{ color: themeState.color }}>Home</h3>
        </Link>
        <Link to='/contact'>
          <h3 style={{ color: themeState.color }}>Contact</h3>
        </Link>
        <Link to='/favs'>
          <h3 style={{ color: themeState.color }}>Favs</h3>
        </Link>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={switchTheme}>
          {themeState.theme ? '🌕' : '🌞'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar