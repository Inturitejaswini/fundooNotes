import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, TextField, Button,Snackbar} from "@material-ui/core";
import {forget} from "../controller/userController";
export class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: this.email,
      snackbarOpen: false,
      snackbarMessage: "",
    };
  }
  handleChangeEmail = (event) => {
    event.target.value.match("^([a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z])*$") != null
      ? this.setState({ email: event.target.value })
      : this.setState({
          snackbarOpen: true,
          snackbarMessage: " *enter valid email",
        });
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
        <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={this.state.snackbarOpen}
              autoHideDuration={6000}
              onClose={this.snackbarOpen}
              message={
                <span id="messege-id">{this.state.snackbarMessage}</span>
              }
            ></Snackbar>
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
