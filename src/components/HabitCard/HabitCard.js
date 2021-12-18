import './HabitCard.css'
import {Link} from "react-router-dom";

const HabitCards = (props) => {
    const {card} = props;
    const {title, description, id} = card

    return (
        <Link to={`/habit/${id}`}>
            <div className="card">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
            </div>
        </Link>


    );
};
export default HabitCards;
