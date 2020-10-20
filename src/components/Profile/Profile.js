import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logOut } from "../../redux/auth-reducer";

import s from "./Profile.module.css";



const Profile = ({logOut, isAuth, name, email}) => {
  /* const refresh =()=>{
    if (isAuth) {
      return <Redirect to={"/"} />;
    }
  }
  useEffect(() => refresh(), [isAuth]) */
 /*  if (isAuthInUse) {
    return <Redirect to={"/"} />;
  } */
  return (
    <div className={s.content}>
      Info of Person:
      Name: {`${name}`}
      Email: {`${email}`}

  <button onClick={logOut}>{isAuth? "true": "false"}</button>
    </div>
  );
};

const ProfileContainer=({logOut, isAuth, name, email})=>{
  
  return <Profile logOut={logOut} isAuth={isAuth} name={name} email={email}/>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name:state.auth.name,
  email:state.auth.email
});

export default connect(mapStateToProps,{logOut})(ProfileContainer);
