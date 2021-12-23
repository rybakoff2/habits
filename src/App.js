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
        
       }, [])


       useEffect(() => {
           if(localStorage.getItem('habit')===null) {
            localStorage.setItem('habit',JSON.stringify(habitStorage))

       }
       else {const habits = JSON.parse(localStorage.getItem('habit'))
            setHabits(habits)
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
