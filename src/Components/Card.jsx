import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({ user }) => {
  const { name, username, id } = user;
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`/dentist/:${id}`}>
        <div className="content-card">
          <img src="../images/doctor.jpg" alt="Doctor image" />
          <p>{name}</p>
          <p>{username}</p>
          <p>ID {id}</p>
        </div>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={addFav} className="favButton"></button>
    </div>
  );
};

export default Card;
