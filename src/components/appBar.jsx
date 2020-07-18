import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Toolbar, IconButton, MuiThemeProvider, createMuiTheme, Paper, Popper, ClickAwayListener, AppBar, InputBase, Grid, Avatar, Divider, Button, Typography,} from "@material-ui/core";
import { RefreshIcon,AppsIcon,SettingsIcon,ViewColumnIcon,MenuIcon,SearchIcon,ViewStreamRoundedIcon,PersonAddIcon} from "@material-ui/icons";
import image from "../assets/keep.jpeg";
import DrawerComponent from "./drawer";
const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: "rgba(0, 0, 0, 0.87)",
        backgroundColor: " white",
      },
    },
  },
  MuiButtontextSizeSmall: {
    padding: "4px 5px",
    fontsize: "0.8125rem",
    margintop: "142px",
  },
});
export class AppBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: "Search...",
      currentText: " ",
      anchorEl: null,
      open: false,
      profileOpen: false,
      openLabel:""
    };
  }

  handleNavigationBar = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handleRefreshPage = () => {
    window.location.reload(false);
  };
  handleProfileMenu = (event) => {
    this.setState({
      anchorEl: this.state.anchorEl ? null : event.currentTarget,
    });
  };
  handleSignout = (event) => {
    this.props.history.push("/login");
  };

  handleClickAway = () => {
    this.setState({
      anchorEl: null,
    });
  };
  handleLabel = () => {
    this.setState({
      openLabel: true,
    });
  };
  handleLabels = () => {
    this.setState({
      openLabel: false,
    });
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" title="My App">
            <Toolbar className="toolbar" title="mainMenu">
              <div>
                <IconButton
                  edge="start"
                  className="menuButton"
                  color="primary"
                  aria-label="menu"
                  onClick={this.handleNavigationBar}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <img className="fundooimage" src={image} />
              <Typography
                variant="title"
                color="textPrimary"
                title="Fundoonotes"
              >
                <h3 className="fundooText">FundooNote</h3>
              </Typography>
              <div className="search_box">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <div>
                  <InputBase
                    className="input-text"
                    type="searchIcon"
                    placeholder="search.."
                  />
                </div>
              </div>
              <div className="Icons" display="flex">
                <IconButton
                  className="refersh"
                  title="Refresh"
                  color="default"
                  aria-label="open drawer"
                  style={{ marginLeft: "5px" }}
                  onClick={this.handleRefreshPage}
                >
                  <RefreshIcon />
                </IconButton>
                {!this.state.openLabel ? (
                  <div>
                    <IconButton
                      className="gridview"
                      title="listview"
                      color="default"
                      style={{ marginLeft: "20px" }}
                      onClick={this.handleLabel}
                    >
                      <ViewColumnIcon />
                    </IconButton>
                  </div>
                ) : (
                  <div>
                    <IconButton
                      className="gridview"
                      title="listview"
                      color="default"
                      onClick={this.handleLabels}
                    >
                      <ViewStreamRoundedIcon />
                    </IconButton>
                  </div>
                )}
                <IconButton
                  className="settings"
                  title="Settings"
                  color="default"
                  aria-label="open drawer"
                >
                  <SettingsIcon />
                </IconButton>
                <IconButton
                  className="googleApps"
                  title="googleApps"
                  color="default"
                  aria-label="open drawer"
                  alignItems="center"
                >
                  <AppsIcon />
                </IconButton>
              </div>
              <div className="acountIcon">
                <Grid
                  className="grid"
                  title="googleAccount"
                  justify-container="center"
                  alignItems="right"
                  style={{ marginLeft: "20PX" }}
                >
                  <IconButton
                    aria-describedby={id}
                    type="button"
                    onClick={this.handleProfileMenu}
                  >
                    <Avatar className="account"></Avatar>
                  </IconButton>
                  <Popper id={id} open={open} anchorEl={anchorEl}>
                    <ClickAwayListener onClickAway={this.handleClickAway}>
                      <Paper className="profile-paper">
                        <div className="profilepage">
                          <div>
                            <h5>
                              <IconButton>
                                <Avatar
                                  className="account"
                                  style={{ cursor: "pointer" }}
                                ></Avatar>
                              </IconButton>
                            </h5>
                            <Button className="manageaccount">
                              <div id="manage-div-btn">
                                Manage your googleAccount
                              </div>
                            </Button>
                            <Divider type="horizontal" />
                            <div className="account-btn">
                              <div className="account">
                                <Button id="acnt-div-btn">
                                  <div className="accounticon">
                                    <PersonAddIcon />
                                  </div>
                                  <div className="accounttext" title="notes">
                                    Add another account
                                  </div>
                                </Button>
                              </div>
                              <Divider type="horizontal" />
                              <div>
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={this.handleSignout}
                                  id="signout-btn"
                                >
                                  <div id="div-sign">Sign out</div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Paper>
                    </ClickAwayListener>
                  </Popper>
                </Grid>
              </div>
              <DrawerComponent className="adcgd" open={this.state.open} />
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withRouter(AppBarComponent);
