import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import AppRouter from './AppRouter';


export const AuthContext = createContext(null);

function App() {

const [isAuth, setIsAuth] = useState(false)

useEffect(() => {

  if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
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
const context = {isAuth, setIsAuth, login, logout}


    return (
        
        <BrowserRouter>
                <AuthContext.Provider value={context}>
                     <Header/>
                     <AppRouter />
                </AuthContext.Provider>
        </BrowserRouter>
  );
}

    export default App;
