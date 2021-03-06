import { LANG_CHANGED } from "./actionTypes";

export const changeLanguage = (lang) => (dispatch) => {
  dispatch({
    type: LANG_CHANGED,
    payload: lang,
  });
};
