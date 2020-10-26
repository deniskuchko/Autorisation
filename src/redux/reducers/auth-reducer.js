import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { userApi } from "../../api";
import { getToken, dropToken } from "../../api/tokenManager";
import { SET_USER_DATA, SET_LOGIN_FORM_STATE } from "../actions";

const initialState = {
  user: { name: null, email: null },
  loginForm: { isButtonDisabled: false }
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: payload
      };
    case SET_LOGIN_FORM_STATE:
      return {
        ...state,
        loginForm: payload
      };

    default:
      return { ...state };
  }
};

const setLoginFormState = (payload) => ({
  type: SET_LOGIN_FORM_STATE,
  payload: { isButtonDisabled: payload }
});

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoginFormState(true));
  try {
    await getToken(email, password);

    const result = await userApi.get("/profile");
    const user = get(result, "data", {});

    if (!isEmpty(user)) {
      dispatch({
        type: SET_USER_DATA,
        payload: user
      });
    }
  } catch (err) {
    alert(err);
    dispatch({
      type: SET_LOGIN_FORM_STATE,
      payload: { isButtonDisabled: true }
    });
  }
  dispatch(setLoginFormState(false));
};

export const logout = () => async (dispatch) => {
  dispatch(setLoginFormState(true));

  try {
    await userApi.post("/profile/logout");
    dropToken();
    dispatch({
      type: SET_USER_DATA,
      payload: { name: null, email: null }
    });
  } catch (err) {
    alert(err);
  }
  dispatch(setLoginFormState(false));
};

export default authReducer;
