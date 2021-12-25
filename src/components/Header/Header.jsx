import {Link} from "react-router-dom";
import './Header.scss'
import logo from '../Images/Logo.png';
import {useContext} from 'react';
import {AuthContext} from '../../App';

function Header() {
    const {isAuth, logout} = useContext(AuthContext)
    return (
        <nav className='navigation'>
            <Link to="/">
                <img className='navigation__logo' src={logo} alt="logo"/>
            </Link>
            <ul className='navigation__list'>
                <li className='navigation__links'>
                <Link className="navigation__link" to="/help">
                    Помощь
                    </Link>
                </li>
                <li className='navigation__links'>
                    <Link className="navigation__link" to="/private">
                     Мои привычки
                    </Link>
                 </li>
                {isAuth && <li className='navigation__link' onClick={logout}>
                Выйти
                </li>}
                </ul>
        </nav>
    );
}

export default Header;
