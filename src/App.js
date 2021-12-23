import React, {createContext, useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import AppRouter from './AppRouter';
import {habitStorage} from "./databases/habitStorage";


export const AuthContext = createContext(null);
export const AppContext = createContext(null);


function App() {
    const [habits, setHabits] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setIsAuth(true)
        }

        if (!localStorage.getItem('habits')) {
            localStorage.setItem('habits', JSON.stringify(habitStorage))
            setHabits(habitStorage)
        } else {
            const getHabits = JSON.parse(localStorage.getItem('habits'))
            setHabits(getHabits)
        }

    }, [])


    function login() {
        localStorage.setItem('isAuth', 'true')
        setIsAuth(true)
    }

    function logout() {
        localStorage.removeItem('isAuth')
        setIsAuth(false)
    }

    const authContext = {isAuth, setIsAuth, login, logout}

    return (
        <AppContext.Provider value={{habits, setHabits}}>
            <AuthContext.Provider value={authContext}>
                <Header/>
                <AppRouter/>
            </AuthContext.Provider>
        </AppContext.Provider>

    );
}

export default App;
