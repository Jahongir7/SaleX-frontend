export const changeLanguage = (lang) => (dispatch) => {
  dispatch({
    type: "LANG_CHANGED",
    payload: lang,
  });
  console.log("lang changed");
};