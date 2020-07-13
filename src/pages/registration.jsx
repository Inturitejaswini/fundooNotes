import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, Button, Snackbar, TextField } from "@material-ui/core";
import register from "../controller/userController";
export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      snackbarOpen: false,
      snackbarMessage: "",
    };
  }
  snackbarClose = (event) => {
    this.setState({ snackbarOpen: false });
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeFirstName = (event) => {
    event.target.value.match("^[a-zA-z ]*$") != null
      ? this.setState({ firstName: event.target.value })
      : this.setState({
          snackbarOpen: true,
          snackbarMessage: " *first name should contain only characters",
        });
  };
  handleChangeLastName = (event) => {
    event.target.value.match("^[a-zA-z ]*$") != null
      ? this.setState({ lastName: event.target.value })
      : this.setState({
          snackbarOpen: true,
          snackbarMessage: " *last name should contain only characters",
        });
  };
  handleChangeFullName = (event) => {
    event.target.value.match("^[a-zA-z ]*$") != null
      ? this.setState({ fullName: event.target.value })
      : this.setState({
          snackbarOpen: true,
          snackbarMessage: "*full name should contain only characters",
        });
  };
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
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
    };
    register(user);
  };
  handleLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="registartion_container">
        <center>
          <Card className="registration-card">
            <div>
              <h2>
                <a href="/">
                  <font color="	#800080">Registration</font>
                </a>
              </h2>
            </div>

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
            <div className="registration-div">
              <div id="registration_modules">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  type="firstName"
                  placeholder="firstName"
                  onChange={this.handleChangeFirstName}
                />
              </div>
              <div id="registration_modules">
                <TextField
                  type="lastName"
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="lastName"
                  onChange={this.handleChangeLastName}
                />
              </div>
              <div id="registration_modules">
                <TextField
                  type="fullName"
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="fullName"
                  onChange={this.handleChangeFullName}
                />
              </div>
              <div id="registration_modules">
                <TextField
                  type="email"
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="email"
                  onChange={this.handleChangeEmail}
                />
              </div>
              <div id="registration_modules">
                <TextField
                  type="password"
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="password"
                  onChange={this.handleChangePassword}
                />
              </div>
            </div>
            <div className="form-group">
              <Button
                onClick={this.handleRegister}
                type="submit"
                id="registor_id"
              >
                <div className="register-divtag">Register</div>
              </Button>
              <Button onClick={this.handleLogin} className="login">
                <div className="login-div">login</div>
              </Button>
            </div>
          </Card>
        </center>
      </div>
    );
  }
}
export default withRouter(Registration);
