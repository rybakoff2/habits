import { BrowserRouter as Switch, Route, Link} from "react-router-dom";
import './Header.css';
import Main from '../Main/Main';
import Help from "../Help/Help";
import Users from "../Users/Users";
import logo from '../Images/Logo.png';

function Header() {
    return (
        <>
             <Switch>
            <nav className='navigation'>
                {/* <div className='navigation__wraper-logo'> */}
                    <div className='navigation__logo'><Link to ="/"><img className='logo' src={logo} alt="logo"/></Link></div>
                {/* </div> */}
                <div className='navigation__wraper-links'>
                <div className='navigation__links'><Link className="navigation__link" to = "/Users">Вход</Link></div>
                <div className='navigation__links'><Link className="navigation__link" to = "/Help">Помощь</Link></div>
                </div>
             
                </nav>
            
                <Route exact path="/">
                   <Main/>
                </Route>

                <Route path="/users">
                    <Users/>
                </Route>

                    
                <Route path="/help">
                    <Help/>
                </Route>

            </Switch>
    </>
    );
  }

  export default Header;