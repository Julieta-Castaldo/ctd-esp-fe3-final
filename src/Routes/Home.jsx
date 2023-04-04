import React from 'react'
import Card from '../Components/Card'
import { useUsersState, UsersState } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {users} = useUsersState()
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {users && users.map(user => <Card key={user.id} user={user}/>)}
      </div>
    </main>
  )
}

export default Home