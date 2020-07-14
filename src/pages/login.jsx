import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TextField, Card, Button, Avatar } from "@material-ui/core";
import { userLogin } from "../controller/userController";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
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
      </div>
    );
  }
}
export default withRouter(Login);
