import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  FormControl,
  createFields,
} from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";



import s from "../common/FormsControls/FormsControls.module.css";


let Input = FormControl("input");
let maxLength25 = maxLengthCreator(25);

const LoginForm = ({ handleSubmit, error,  isButtonDisabled}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createFields("Email", "email", Input, [required, maxLength25])}
        {createFields("Password", "password", Input, [required, maxLength25], {
          type: "password",
        })}       
        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
          <button disabled={isButtonDisabled}> Submit</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = ({ login, isAuth,isButtonDisabled }) => {
  const onSubmit = ({ email, password,   }) => {
    login(email, password)
  };
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1> login</h1>
      <LoginReduxForm onSubmit={onSubmit}  isButtonDisabled={isButtonDisabled}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isButtonDisabled:state.auth.isButtonDisabled,
});


export default connect(mapStateToProps, { login })(Login);