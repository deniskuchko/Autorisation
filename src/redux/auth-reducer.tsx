import { authAPI } from "../api/api";

let  accessToken = ''

const SET_USER_DATA = "network/auth/SET_USER_DATA";
const IS_BUTTON_DISABLED = "IS_BUTTON_DISABLED"
let initialState = {
  name: null as number | null,
  email: null as string | null,
  isAuth: false as boolean,
  isButtonDisabled: false as boolean
};
export type InitialStateType = typeof initialState;

const authReduser = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case IS_BUTTON_DISABLED:
      return {
        ...state,
        isButtonDisabled: action.isButtonDisabled
      };

    default:
      return { ...state };
  }
};
type SetAthUserDataActionPayloadType = {
  name: string | null;
  email: string | null;
  isAuth: boolean;
};
type SetAthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAthUserDataActionPayloadType;
};
export const setAuthUserData = (
  name: string | null,
  email: string | null,
  isAuth: boolean
): SetAthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: {
    name,
    email,
    isAuth,
  },
});

type IsButtonDisabledActionCreator={
  type: typeof IS_BUTTON_DISABLED,
  isButtonDisabled: boolean
}
export const isDisabled =(isButtonDisabled:boolean):IsButtonDisabledActionCreator =>({
  type:  IS_BUTTON_DISABLED,
  isButtonDisabled
})

export const getAuthUserData = (accessToken:any) => async (dispatch: any) => {
  let response = await authAPI.me(accessToken);
  console.log('Me ', response);
  
  let { name, email } = response.data.data;
  dispatch(setAuthUserData(name, email, true));
  
};
export const login = (
  email: string,
  password: string,
) => {
  return async (dispatch: any) => {
    dispatch(isDisabled(true))
    try{
      let response = await authAPI.login(email, password, );
      accessToken = response.data.data.accessToken

      dispatch(getAuthUserData(accessToken));
      
    }
    catch(err){
      alert(err)
    }
    dispatch(isDisabled(false))
   
  };
};
export const logOut = () => {
  return async (dispatch: any) => {
    try{
      
      let response = await authAPI.logout(accessToken);
      console.log("logout", response);
      if (response.success === true) {
        dispatch(setAuthUserData(null, null, false));
      }
    }
    catch(err){alert(err)}
  };
};

export default authReduser;
