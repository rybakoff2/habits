import './HabitCard.css'
import {Link} from "react-router-dom";

const HabitCards = (props) => {
    const {card} = props;
    const {title, description, id} = card

    return (
        <div>
        <Link to={`/habit/${id}`}>
            <div className="card">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
                <div>Результат</div>
            </div>
        </Link>
        <button>+</button>
        <button>-</button>
        </div>

    );
};
export default HabitCards;
