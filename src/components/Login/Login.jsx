import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { Input, Button } from "antd";
import {
  FormControl,
  createFields
} from "../common/FormsControls/FormsControls";

import { required, validateEmail } from "../../utils/validators";

import style from "../common/FormsControls/FormsControls.module.css";

const Inputs = FormControl(Input);

// jsx spaces should be defined as &nbsp
const LoginForm = ({ handleSubmit, error, isButtonDisabled }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createFields("Email", "email", Inputs, [validateEmail])}
        {createFields("Password", "password", Inputs, [required], {
          type: "password"
        })}
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
          <Button
            onClick={handleSubmit}
            type="primary"
            disabled={isButtonDisabled}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.shape({}),
  isButtonDisabled: PropTypes.bool
};
LoginForm.defaultProps = {
  error: undefined,
  isButtonDisabled: false
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export const Login = ({ login, userEmail, loginForm }) => {
  const onSubmit = ({ email, password }) => {
    login(email, password);
  };
  if (userEmail) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm
        onSubmit={onSubmit}
        isButtonDisabled={loginForm.isButtonDisabled}
        userEmail={userEmail}
      />
    </div>
  );
};

Login.propTypes = {
  userEmail: PropTypes.string,
  login: PropTypes.func.isRequired,
  loginForm: PropTypes.shape({ isButtonDisabled: PropTypes.bool })
};
Login.defaultProps = {
  loginForm: { isButtonDisabled: false },
  userEmail: undefined
};
