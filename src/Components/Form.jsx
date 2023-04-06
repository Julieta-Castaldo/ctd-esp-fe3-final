import React, { useState } from "react";
import './Form.css'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name:'',
    lastName:'',
    email: ''
  })

  const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
  const [valid, setValid] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if((user.name.length + user.lastName.length) >= 5 && user.name.length !== 0 && user.lastName.length !== 0 && regex.test(user.email)){
      setValid(true)
      setError(false)
    } else {
      setValid(false)
      setError(true)
    }
}

  return (
    <div className="form">
       <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Ingrese su nombre' value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/> 
          <input type="text" placeholder='Ingrese su apellido' value={user.apellido} onChange={(e) => setUser({...user, lastName: e.target.value})}/>  
          <input type="text" placeholder='Ingrese su email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/> 
          <button className="submitButton">Enviar</button>
      </form>

      {error ? <p className='error'>Por favor verifique su información nuevamente </p> : null }
      {valid && <p className="validInfo">Gracias {user.name}, te contactaremos cuando antes vía mail</p>}

    </div>
  );
};

export default Form;
