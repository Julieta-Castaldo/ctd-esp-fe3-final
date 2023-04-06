import { useContext, createContext, useEffect, useState, useReducer } from "react";

export const UsersState = createContext();

const Context = ({ children }) => {
    const themes = {
        dark: {
            theme: false,
            bgColor: '#949494',
            color: 'white',
            fontSize: '3rem',
            cardColor: '#E2E2E2',
            navColor: '#12121296'
        },
        light: {
            theme: true,
            bgColor: 'white',
            color: 'black',
            fontSize: '2.5rem',
            cardColor: 'white',
            navColor: '#E5E5E5'
        }
    }

    const initialThemeState = themes.light

    const themeReducer = (state, action) => {
        switch (action.type) {
            case 'SWITCH_DARK':
                return themes.dark
            case 'SWITCH_LIGHT':
                return themes.light
            default:
                throw new Error
        }
    }

    const [users, setUsers] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
    

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
        <UsersState.Provider value={{ users, setUsers, themeState, themeDispatch }}>
            {children}
        </UsersState.Provider>
    )

}

export default Context;

export const useUsersState = () => useContext(UsersState)
