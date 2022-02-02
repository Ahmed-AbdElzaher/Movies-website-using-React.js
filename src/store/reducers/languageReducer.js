import { CHANGE_LANGUAGE } from '../actions/languageAction';

const INITIAL_STATE = {
  user_preffered_language: "en",
  app_language: "en",
};

export default function languageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        app_language: action.payload,
      };
    default:
      return state;
  }
}
