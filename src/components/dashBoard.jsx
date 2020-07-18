import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Toolbar,
  IconButton,
  createMuiTheme,
  Paper,
  Popper,
  MuiThemeProvider,
  AppBar,
  InputBase,
  Grid,
  Avatar,
  Divider,
  Button,
  Typography,
  ClickAwayListener,
} from "@material-ui/core";
import {
  RefreshIcon,
  AppsIcon,
  SettingsIcon,
  ViewColumnIcon,
  MenuIcon,
  SearchIcon,
  ViewStreamRoundedIcon,
  PersonAddIcon,
} from "@material-ui/icons";
import Notes from "../components/notes";
import GetNotes from "../components/getNote";
import image from "../assets/keep.jpeg";
import DrawerComponent from "../components/drawer";
const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: "rgba(0, 0, 0, 0.87)",
        backgroundColor: " white",
      },
    },
    MuiIconButton: {
      root: {
        padding: "6PX",
        fontSize: "0.5em",
      },
    },
    MuiOutlinedInput: {
      padding: "18.5px 14px",
      width: "px",
      height: "3px",
    },
  },
});
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: "Search...",
      anchorEl: null,
      open: false,
      openList: false,
      profileOpen: false,
    };
  }
  handleLabel = () => {
    this.setState({
      openList: true,
    });
  };
  handleLabels = () => {
    this.setState({
      openList: false,
    });
  };

  handleNavigationbar = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handleRefreshPage = () => {
    window.location.reload(false);
  };
  handleProfilemenu = (event) => {
    this.setState({
      anchorEl: this.state.anchorEl ? null : event.currentTarget,
    });
  };
  handleSignout = () => {
    this.props.history.push("/login");
  };
  handleClickAway = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const dashboardId = open ? "simple-popper" : undefined;
    return (
      <div id="dashboard-appbar">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" title="My App" className="appbar-class">
            <Toolbar className="toolbar" title="mainMenu">
              <div>
                <IconButton
                  edge="start"
                  className="menuButton"
                  color="primary"
                  aria-label="menu"
                  onClick={this.handleNavigationbar}
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
                <h3>FundooNote</h3>
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
                  onClick={this.handleRefreshPage}
                >
                  <RefreshIcon />
                </IconButton>
                {!this.state.openn ? (
                  <div>
                    <IconButton
                      className="gridview"
                      title="listview"
                      color="default"
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
                >
                  <IconButton
                    aria-describedby={id}
                    type="button"
                    onClick={this.handleProfilemenu}
                  >
                    <Avatar className="account"></Avatar>
                  </IconButton>
                  <Popper id={dashboardId} open={open} anchorEl={anchorEl}>
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
          <Notes />
          <GetNotes
            listId={this.state.openList}
            className="getnote-divcard"
          ></GetNotes>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withRouter(Dashboard);
