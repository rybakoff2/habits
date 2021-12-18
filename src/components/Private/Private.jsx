import React, {useContext, useEffect} from 'react'
import {habitStorage} from '../../databases/habitStorage';
import HabitCard from "../HabitCard/HabitCard";
import {AppContext, AuthContext} from '../../App';
import {Redirect} from 'react-router-dom';


const Private = () => {
    const {isAuth} = useContext(AuthContext)
    const {habits, setHabits} = useContext(AppContext)


    if (isAuth) {

        return (
            <>
                <h2>
                    И снова здавствуйте!
                </h2>

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
            <Redirect to='/login'/>
        )
    }
};
export default Private;
