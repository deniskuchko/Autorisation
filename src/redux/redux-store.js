import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import authReducer from "./reducers/auth-reducer";

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);

export default store;
