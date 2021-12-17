import { BrowserRouter as Switch, Route, Link} from "react-router-dom";
import './Header.css';
import logo from '../Images/Logo.png';
import { createContext } from 'react';
import { useContext } from "react";
import { AuthContext } from '../../App';

function Header() {
    const {isAuth} = useContext(AuthContext)
    return (
        <>
             
            <nav className='navigation'>
                
                <div className='navigation__logo'><Link to ="/"><img className='logo' src={logo} alt="logo"/></Link></div>
                <div className='navigation__wraper-links'>
                    {isAuth && <div className='navigation__links'><Link className="navigation__link" to = "/private">Мои привычки</Link></div>}
                    {!isAuth && <div className='navigation__links'><Link className="navigation__link" to = "/private">Войти</Link></div>}
                    <div className='navigation__links'><Link className="navigation__link" to = "/help">Помощь</Link></div>
                </div>
             
            </nav>
           
    </>
    );
  }

  export default Header;