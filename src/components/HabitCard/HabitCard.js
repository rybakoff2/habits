import './HabitCard.css'
const HabitCards = (props) => {
const {title,description} = props;

return (
    <div className="card">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
    </div>

);
};
export default HabitCards;