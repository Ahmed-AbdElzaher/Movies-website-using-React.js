import { GET_MOVIES_LIST } from "../actions/moviesAction";

const INITIAL_STATE = {
  moviesList: [],
};

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
}
