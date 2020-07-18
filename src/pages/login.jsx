import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TextField, Card, Button, Avatar, Snackbar } from "@material-ui/core";
import { userLogin } from "../controller/userController";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
  handleChangePassword = (event) => {
    event.target.value.match("^[a-z0-9 ]*$") != null
      ? this.setState({ password: event.target.value })
      : this.setState({
          snackbarOpen: true,
          snackbarMessage: " *password should minimum 6 character",
        });
  };
  handleRegister = () => {
    this.props.history.push("/registration");
  };
  handleForgot = () => {
    this.props.history.push("/forgotPassword");
  };
  handleLogin = () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    userLogin(user).then((response) => {
      if (response) {
        this.props.history.push("/dashBoard");
      }
    });
  };
  render() {
    return (
      <div className="login_container">
        <Card className="login_card-div">
          <div id="acnt-icon">
            <Avatar className="account"></Avatar>
          </div>
          <div>
            <h2>
              <font color="#800080">FundooLogin</font>
            </h2>
          </div>
          <div className="card-inner-div">
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            ></TextField>
            <br />
            <TextField
              id="standard-password-input"
              label="Password"
              variant="outlined"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            ></TextField>
            <br />
            <div>
              <Button
                type="submit"
                onClick={this.handleLogin}
                Id="btn"
                variant="contained"
              >
                <div className="login">Login</div>
              </Button>
            </div>
            <div>
              <Button
                onClick={this.handleRegister}
                id="register_Btn"
                variant="contained"
              >
                <div className="register">Register</div>
              </Button>
            </div>
            <div>
              <div
                className="forgot-div"
                onClick={this.handleForgot}
                style={{ cursor: "pointer" }}
              >
                forgotpassword?
              </div>
            </div>
          </div>
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.snackbarOpen}
          message={<span id="messege-id">{this.state.snackbarMessage}</span>}
        ></Snackbar>
      </div>
    );
  }
}
export default withRouter(Login);
