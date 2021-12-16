import habit from '../Images/main_habit4.jpg';
import './Main.css';
import Motivation from '../Motivation/Motivation';



function Main() {
    return (
      <>
      <h1 className='main-head' >Habits tracker - дневник Ваших привычек</h1>
      <hr className='main-hr' />
        <div>
          <img className="main-image" src={habit} alt = '' />
          <Motivation />
        </div>
        </>
    );
  }
  
  export default Main;