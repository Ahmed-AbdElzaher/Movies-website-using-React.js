import { addToFavorite } from "../actions/action";
import { removeFromFavorite } from "../actions/action";

const initialState = {movies : []}
export default function FavoriteReducer(state = initialState, action) {
  console.log('action.type',action.type)
  switch (action.type) {
    case addToFavorite:
      console.log("add")
      return {
        ...state,
        movies : [...state.movies , action.payload]
      };
    case removeFromFavorite:
      const movies = state.movies.filter(item => item.id !== action.payload.id);
      console.log("favoriteMoviesAfter",movies)
      return {
        ...state,
        movies : state.movies.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
}
