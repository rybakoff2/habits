import HabitCard from "./HabitCard";
import './Users.css'
import { habitStorage } from "./habitStorage";
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