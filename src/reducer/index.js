import {combineReducers} from "redux";
import {reducer as game} from "./game/game";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";
import Namespace from "./namespaces";

export default combineReducers({
  [Namespace.GAME]: game,
  [Namespace.DATA]: data,
  [Namespace.USER]: user,
});
