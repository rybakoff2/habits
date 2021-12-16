import HabitCard from "../HabitCard/HabitCard";
import './Users.css'
import { habitStorage } from "../HabitCard/habitStorage";
function Users() {
    return (
        <>

           <h2>Мои привычки</h2>
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

};
  export default Users;