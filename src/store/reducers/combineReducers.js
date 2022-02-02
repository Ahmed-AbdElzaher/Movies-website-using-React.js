import { combineReducers } from "redux";
import FavReducer from "./FavReducer";
import moviesReducer from "./MoviesReducer";
import languageReducer from "./languageReducer";


export default combineReducers({
  favorite: FavReducer,
  movies: moviesReducer,
  language: languageReducer,
});
