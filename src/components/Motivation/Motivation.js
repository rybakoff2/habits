import './Motivation.css';
import {textMotivation} from './TextMotivation';
import {getRandomText} from './GetRandomText'

function Motivation() {
 
  return (
    <div className="motivation">
        <h2 className="motivation__head" >Цитата дня</h2>
      <p className="motivation__text" >
         {textMotivation[getRandomText()].text}
        <span className="motivation__text-autor" >{textMotivation[getRandomText()].autor}</span>
      </p>
    </div>
  );
}

export default Motivation;
