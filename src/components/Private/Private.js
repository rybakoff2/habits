import React from 'react'
import { habitStorage } from '../HabitCard/habitStorage';
import HabitCard from "../HabitCard/HabitCard";
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { Redirect } from 'react-router-dom';



const Private = () => {
  
  const {isAuth} = useContext(AuthContext)
  
    if (isAuth) {
          
      return (
         
        <>
           <h2>
              И снова здавствуйте! 
            </h2>
           
           <div className="card__wrapper">
            {habitStorage.map((item) => {
          return (
              <HabitCard
              title = {item.title}
              description = {item.description}
              />)
        })
    }
            </div>
        </>
    );
  }
  else {
    
  return (
   <Redirect to = '/login'/>

  )}
};
  export default Private;
