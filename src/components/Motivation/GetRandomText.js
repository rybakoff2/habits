import { textMotivation } from "./TextMotivation";

 export const getRandomText = (min, max) => {
        min = 0;
        max = textMotivation.length;
        return Math.floor(Math.random() * (max - min)) + min;
      }


