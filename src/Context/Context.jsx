import { useContext, createContext, useEffect, useState } from "react";

export const UsersState = createContext();

const Context = ({ children }) => {
    const [users, setUsers] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await fetch(url)
            let data = await res.json()
            console.log(data)
            setUsers(data)
        }
        fetchUsers()
    }, [])

    return (
        <UsersState.Provider value={{users, setUsers}}>
            {children}
        </UsersState.Provider>
    )

}

export default Context;

export const useUsersState = () => useContext(UsersState)
