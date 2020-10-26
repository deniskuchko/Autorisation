// index.js files should be used as interfaces
import { connect } from "react-redux";
import { logout } from "../../redux/reducers/auth-reducer";

import { Profile } from "./Profile";

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
  email: state.auth.user.email,
  isButtonDisabled: state.auth.loginForm.isButtonDisabled
});

export default connect(mapStateToProps, { logout })(Profile);
