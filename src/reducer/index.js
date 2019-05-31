import {combineReducers} from "redux";
import {reducer as game} from "./game/game";
import {reducer as data} from "./data/data";

export default combineReducers({
  game,
  data,
});
