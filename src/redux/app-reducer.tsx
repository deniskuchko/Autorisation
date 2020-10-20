import { getAuthUserData } from "./auth-reducer";

const INITIALISED_SUCCESS = "INITIALISED_SUCCESS";

export type InitialStateType = {
  initialised: boolean;
};
let initialState: InitialStateType = {
  initialised: false,
};

const appReduser = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialised: true,
      };
    default:
      return state;
  }
};

type InitialisedSuccessActionType = {
  type: typeof INITIALISED_SUCCESS;
};
export const initialisedSuccess = (): InitialisedSuccessActionType => ({
  type: INITIALISED_SUCCESS,
});

export const initialise = () => {
  return (dispatch: any) => {
    /* let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initialisedSuccess());
    }); */
  };
};

export default appReduser;
