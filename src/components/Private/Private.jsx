import React, { useContext } from 'react'
import './Private.css'
import HabitCard from "../HabitCard/HabitCard";
import { AppContext, AuthContext } from '../../App';
import { Link } from 'react-router-dom';
import add from '../Images/add.png'


const Private = () => {
    const { isAuth } = useContext(AuthContext)
    const { habits} = useContext(AppContext)


    if (!isAuth) {

        return (   
            <div className='no-login-user'>
                <p className='no-login-user__text'>Для доступа к своим привычкам необходимо авторизоваться</p>
                {!isAuth && 
                    <Link to="/login" className='link'><button className='no-login-user__button'>
                        Авторизация
                        </button> </Link>}
            </div>
            
        )
                }






        
        
    else {
        return (
            <>
                <h2 className='private__header' >
                    Здесь отображаются все Ваши привычки
                </h2>
                
                    <Link className="card__link" to="/create" >
                    <img className='card__img' src={add} alt="logo"/>
                    </Link>
                
                <div className="card__wrapper">
                    {habits.map((item) => {
                        return (
                            <HabitCard key={item.id}
                                card={item}
                            />)
                    })
                    }
                </div>
            </>
        );
    } 
           
    
};
export default Private;
