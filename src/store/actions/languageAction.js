export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeLanguageAction = (payload) => {
  return {
    type: CHANGE_LANGUAGE,
    payload,
  };
};
