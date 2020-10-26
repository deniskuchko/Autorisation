import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../../redux/reducers/auth-reducer";
import { Login } from "./Login";

let mapStateToProps = (state) => ({
  userEmail: state.auth.user.email,
  loginForm: state.auth.loginForm
});

export default compose(connect(mapStateToProps, { login }))(Login);
