import React, { useContext, useEffect } from 'react'
import './Private.css'
import { habitStorage } from '../../databases/habitStorage';
import HabitCard from "../HabitCard/HabitCard";
import { AppContext, AuthContext } from '../../App';
import { Redirect, Link } from 'react-router-dom';
import CreateHabit from '../../pages/CreateHabit/CreateHabit';
import add from '../Images/add.png'


const Private = () => {
    const { isAuth } = useContext(AuthContext)
    const { habits, setHabits } = useContext(AppContext)


    if (isAuth) {

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
    } else {

        return (
            <Redirect to='/login' />
        )
    }
};
export default Private;
