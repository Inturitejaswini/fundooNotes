import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, TextField, Button } from "@material-ui/core";
import {forget} from "../controller/userController";
export class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: this.email,
    };
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleClick = () => {
    const user = {
      email: this.state.email,
    };
    forget(user);
  };

  render() {
    return (
      <div className="login_container-forgot">
        <Card className="forgot_card-card">
          <div className="abcd">
            <h3>fundooapp</h3>
          </div>
          <div className="email-div">
            <TextField
              name="email"
              value={this.state.email}
              label="email"
              variant="outlined"
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="submit-div">
            <Button onClick={this.handleClick}>
              <div className="sub">submit</div>
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(ForgetPassword);
