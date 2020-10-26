import React from "react";
import { Redirect } from "react-router-dom";
import { Card, Avatar, Button } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

export const Profile = ({ name, email, isButtonDisabled, logout }) => {
  if (!name) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div>
        <Card
          name={name}
          email={email}
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={name}
            description={email}
          />
        </Card>
        <br />
      </div>
      <Button type="primary" onClick={logout} disabled={isButtonDisabled}>
        {name ? "Exit" : "false"}
      </Button>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
  logout: PropTypes.func.isRequired
};
Profile.defaultProps = {
  name: undefined,
  email: undefined,
  isButtonDisabled: false
};
