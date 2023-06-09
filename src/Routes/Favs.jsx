import React from "react";
import Card from "../Components/Card";
import { useUsersState } from "../Context/Context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favsState } = useUsersState();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsState && favsState.map(fav => <Card  key={fav.id} user={fav} />)}
      </div>
    </>
  );

  {/* este componente debe consumir los destacados del localStorage */ }
  {/* Deberan renderizar una Card por cada uno de ellos */ }
};



export default Favs;
